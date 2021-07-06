"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class badhi_bibaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  badhi_bibaran.init(
    {
      badhi_aayeko_stha: DataTypes.STRING,
      dist_id: DataTypes.INTEGER,
      manab_ghaite: DataTypes.STRING,
      manab_mareko: DataTypes.STRING,
      uddar_sankhya: DataTypes.STRING,
      badhi_aayeko_miti: DataTypes.STRING,
      xeti_sankhya: DataTypes.STRING,
      created_by: DataTypes.STRING,
      updated_by: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "badhi_bibaran",
    }
  );
  return badhi_bibaran;
};
