"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mudda_anusandhan_dayari extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mudda_anusandhan_dayari.init(
    {
      dist_id: DataTypes.INTEGER,
      jaheri_partibedan_miti: DataTypes.STRING,
      kasurko_kisim: DataTypes.STRING,
      bigo_pariman: DataTypes.STRING,
      jaggako_area: DataTypes.STRING,
      jaggako_thegana: DataTypes.STRING,
      abhiyog_miti: DataTypes.STRING,
      abhiyog_nikaya: DataTypes.STRING,
      abhiyog_jariwana: DataTypes.STRING,
      kaid: DataTypes.STRING,
      bojbahak_jafat_maagdabi: DataTypes.STRING,
      pratibadi_sankhya: DataTypes.STRING,
      thunchek_dharauti: DataTypes.STRING,
      sadharan_tarekh: DataTypes.STRING,
      thuna_aadhes: DataTypes.STRING,
      faisala_miti: DataTypes.STRING,
      faisala_jariwana: DataTypes.STRING,
      faisala_kaid: DataTypes.STRING,
      bojbahak_jafat: DataTypes.STRING,
      created_by: DataTypes.STRING,
      updated_by: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "mudda_anusandhan_dayari",
    }
  );
  return mudda_anusandhan_dayari;
};
