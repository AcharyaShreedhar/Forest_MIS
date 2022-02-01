"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rojgar_srijana extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rojgar_srijana.init(
    {
      dist_id: DataTypes.INTEGER,
      office_id: DataTypes.INTEGER,
      karya: DataTypes.INTEGER,
      miti:DataTypes.STRING,
      ekai: DataTypes.INTEGER,
      banka_prakar: DataTypes.STRING,
      mahila: DataTypes.INTEGER,
      purus: DataTypes.INTEGER,
      kaifiyat: DataTypes.STRING,
      created_by: DataTypes.STRING,
      updated_by: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "rojgar_srijana",
    }
  );
  return rojgar_srijana;
};
