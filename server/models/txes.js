'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Txes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Txes.init({
    tx_hash: DataTypes.STRING,
    block: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Txes',
  });
  return Txes;
};