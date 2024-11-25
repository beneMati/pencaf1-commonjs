const { Users } = require('../models');
const baseRepository = require('../repositories/utilsRepository');
const handlePassword = require('../utils/handlePassword');

const createUser = async (data) => {
  const hashedPassword = await handlePassword.hashPassword(data.password);
  data.password = hashedPassword;
  return baseRepository.create(Users, data);
};
  
const getUser = async (id) => {
  return baseRepository.findById(Users, id);
};
  
const getUsers = async () => {
  return baseRepository.findAll(Users);
};

const getUserByQuery = async (query) => {
  return baseRepository.findOne(Users, { where: query });
};
  
const deleteUser = async (id) => {
  return baseRepository.deleteById(Users, id);
};
  
module.exports = { createUser, getUser, getUsers, deleteUser, getUserByQuery };