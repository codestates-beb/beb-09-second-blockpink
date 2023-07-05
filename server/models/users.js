'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    nickname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    privatekey: DataTypes.STRING,
    address: DataTypes.STRING,
    token_amount: DataTypes.FLOAT,
    eth_amount: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};