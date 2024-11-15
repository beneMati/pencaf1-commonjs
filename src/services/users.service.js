const { Users } = require('../models');
const baseRepository = require('../repositories/utilsRepository');

const createUser = async (data) => {
  return baseRepository.create(Users, data);
};
  
const getUser = async (id) => {
  return baseRepository.findById(Users, id);
};
  
const getUsers = async () => {
  return baseRepository.findAll(Users);
};
  
const deleteUser = async (id) => {
  return baseRepository.deleteById(Users, id);
};
  
module.exports = { createUser, getUser, getUsers, deleteUser };