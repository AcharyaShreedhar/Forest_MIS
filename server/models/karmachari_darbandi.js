"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class karmachari_darbandi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  karmachari_darbandi.init(
    {
      dist_id: DataTypes.INTEGER,
      post: DataTypes.STRING,
      karyalaya: DataTypes.STRING,
      thegana: DataTypes.STRING,
      kayam_darbandi_sankhya: DataTypes.STRING,
      padpurti_sankhya: DataTypes.STRING,
      khali_sankhya: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "karmachari_darbandi",
    }
  );
  return karmachari_darbandi;
};
