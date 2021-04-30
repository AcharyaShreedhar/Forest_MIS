"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class municipality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  municipality.init(
    {
      mun_name_nep: DataTypes.STRING,
      mun_name_eng: DataTypes.STRING,
      dist_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "municipality",
    }
  );
  return municipality;
};
