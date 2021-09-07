"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class uddham extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  uddham.init(
    {
      name: DataTypes.STRING,
      dist_id: DataTypes.INTEGER,
      address: DataTypes.STRING,
      uddham_type: DataTypes.INTEGER,
      darta_miti: DataTypes.STRING,
      rojgar_sankhya: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "uddham",
    }
  );
  return uddham;
};
