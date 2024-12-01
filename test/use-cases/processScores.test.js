/* eslint-disable no-undef */
const buildScorePromises = require('../../src/use-cases/scores/buildScorePromises');
const scoreService = require('../../src/services/scores.service');

jest.mock('../../src/services/scores.service');

describe('buildScorePromises', () => {
  const circuitId = 1;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return an array of promises for each userId', async () => {
    const userScores = { user1: 10, user2: 15 };
    
    // Mock createOrUpdateScore to resolve successfully
    scoreService.createOrUpdateScore.mockResolvedValue(true);

    const promises = buildScorePromises(userScores, circuitId);

    // Verify array of promises
    expect(promises).toHaveLength(Object.keys(userScores).length);

    // Await all promises to verify results
    const results = await Promise.all(promises);
    expect(results).toEqual([true, true]);

    // Verify service calls
    expect(scoreService.createOrUpdateScore).toHaveBeenCalledWith(
      { userId: 'user1', circuitId }, 
      { score: 10 },
    );
    expect(scoreService.createOrUpdateScore).toHaveBeenCalledWith(
      { userId: 'user2', circuitId }, 
      { score: 15 },
    );
  });

  it('should handle errors for specific userId', async () => {
    const userScores = { user1: 10, errorUser: 20 };

    // Mock success for user1 and error for errorUser
    scoreService.createOrUpdateScore.mockImplementation(({ userId }) => {
      if (userId === 'errorUser') throw new Error('Simulated error');
      return true;
    });

    const promises = buildScorePromises(userScores, circuitId);

    // Expect the first promise to resolve and the second to reject
    await expect(promises[0]).resolves.toBe(true);
    await expect(promises[1]).rejects.toThrow('Simulated error');

    // Verify service calls
    expect(scoreService.createOrUpdateScore).toHaveBeenCalledTimes(2);
    expect(scoreService.createOrUpdateScore).toHaveBeenCalledWith(
      { userId: 'user1', circuitId }, 
      { score: 10 },
    );
    expect(scoreService.createOrUpdateScore).toHaveBeenCalledWith(
      { userId: 'errorUser', circuitId }, 
      { score: 20 },
    );
  });
});