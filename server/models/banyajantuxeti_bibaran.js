"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class banyajantuxeti_bibaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  banyajantuxeti_bibaran.init(
    {
      pidit_name: DataTypes.STRING,
      pidit_address: DataTypes.STRING,
      jagga_bibaran: DataTypes.STRING,
      nagarikta_no: DataTypes.STRING,
      upabhoktasamiti_name: DataTypes.STRING,
      xetigarne_animal: DataTypes.STRING,
      xeti_miti: DataTypes.STRING,
      pasudhan_ghargoth: DataTypes.STRING,
      man_injury_normal: DataTypes.STRING,
      man_injury_medium: DataTypes.STRING,
      man_death: DataTypes.STRING,
      mag_rakam: DataTypes.STRING,
      samitiko_mulyankan_rakam: DataTypes.STRING,
      vuktani_rakam: DataTypes.STRING,
      remarks: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "banyajantuxeti_bibaran",
    }
  );
  return banyajantuxeti_bibaran;
};
