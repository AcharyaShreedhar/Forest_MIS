"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class jaladhar_samrakshyan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jaladhar_samrakshyan.init(
    {
      dist_id: DataTypes.STRING,
      office_id: DataTypes.INTEGER,
      sthan: DataTypes.STRING,
      qty: DataTypes.STRING,
      karyakram_miti: DataTypes.STRING,
      laagat: DataTypes.STRING,
      created_by: DataTypes.STRING,
      updated_by: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "jaladhar_samrakshyan",
    }
  );
  return jaladhar_samrakshyan;
};
