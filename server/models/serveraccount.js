"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ServerAccount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ServerAccount.init(
    {
      address: DataTypes.STRING,
      privatekey: DataTypes.STRING,
      eth_amount: DataTypes.STRING,
      token_amount: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ServerAccount",
    }
  );
  return ServerAccount;
};
