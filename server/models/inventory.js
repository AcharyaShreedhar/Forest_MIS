"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  inventory.init(
    {
      item_name: DataTypes.STRING,
      entry_id: DataTypes.INTEGER,
      exit_id: DataTypes.INTEGER,
      invent_date: DataTypes.INTEGER,
      remaining_qty: DataTypes.INTEGER,
      remaining_rate: DataTypes.INTEGER,
      remaining_amt: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "inventory",
    }
  );
  return inventory;
};
