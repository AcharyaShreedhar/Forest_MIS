"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  entry.init(
    {
      entry_qty: DataTypes.INTEGER,
      entry_rate: DataTypes.INTEGER,
      entry_amt: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "entry",
    }
  );
  return entry;
};
