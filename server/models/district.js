"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class district extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  district.init(
    {
      dist_name_nep: DataTypes.STRING,
      dist_name_eng: DataTypes.STRING,
      prov_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "district",
    }
  );
  return district;
};
