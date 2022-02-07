"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class banpaidawar_bikribitaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  banpaidawar_bikribitaran.init(
    {
      dist_id: DataTypes.INTEGER,
      office_id: DataTypes.INTEGER,
      bikri_miti: DataTypes.STRING,
      banko_kisim: DataTypes.INTEGER,
      bikri_medium: DataTypes.STRING,
      banpaidawar_kisim: DataTypes.STRING,
      ekai: DataTypes.STRING,
      dar: DataTypes.STRING,
      parinam: DataTypes.STRING,
      rakam: DataTypes.STRING,
      created_by: DataTypes.STRING,
      updated_by: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "banpaidawar_bikribitaran",
    }
  );
  return banpaidawar_bikribitaran;
};
