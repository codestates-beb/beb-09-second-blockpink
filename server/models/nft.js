'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NFT extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NFT.init({
    n_userId: DataTypes.INTEGER,
    token_id: DataTypes.INTEGER,
    ipfs_hash: DataTypes.STRING,
    tx_hash: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NFT',
  });
  return NFT;
};