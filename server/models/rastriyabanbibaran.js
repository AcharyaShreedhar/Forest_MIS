"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rastriyabanbibaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rastriyabanbibaran.init(
    {
      rastriyaban_naam: DataTypes.STRING,
      darta_no: DataTypes.STRING,
      darta_miti: DataTypes.STRING,
      dist_id: DataTypes.INTEGER,
      address: DataTypes.STRING,
      main_species: DataTypes.STRING,
      area: DataTypes.STRING,
      ghardhuri: DataTypes.STRING,
      lav_jana: DataTypes.STRING,
      created_by: DataTypes.STRING,
      updated_by: DataTypes.STRING,
      createdAt: DataTypes.STRING,
      updatedAt: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "rastriyabanbibaran",
    }
  );
  return rastriyabanbibaran;
};
