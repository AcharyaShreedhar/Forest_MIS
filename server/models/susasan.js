"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Susasan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Susasan.init(
    {
      darta_no: DataTypes.STRING,
      arthik_barsa:DataTypes.STRING,
      lekha_parixan_miti: DataTypes.STRING,
      partibedan_miti: DataTypes.STRING,
      sadharansava_miti: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Susasan",
    }
  );
  return Susasan;
};
