"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chaklaban_bibaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  chaklaban_bibaran.init(
    {
      chaklaban_naam: DataTypes.STRING,
      darta_no: DataTypes.STRING,
      darta_miti: DataTypes.STRING,
      dist_id: DataTypes.INTEGER,
      address: DataTypes.STRING,
      area: DataTypes.STRING,
      main_species: DataTypes.STRING,
      ghardhuri: DataTypes.STRING,
      lav_jana: DataTypes.STRING,
      created_by: DataTypes.STRING,
      updated_by: DataTypes.STRING,
      createdAt: DataTypes.STRING,
      updatedAt: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "chaklaban_bibaran",
    }
  );
  return chaklaban_bibaran;
};
