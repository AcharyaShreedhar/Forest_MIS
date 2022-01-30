"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class banxetra_anyaprayojan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  banxetra_anyaprayojan.init(
    {
      dist_id: DataTypes.INTEGER,
      office_id: DataTypes.INTEGER,
      arthik_barsa: DataTypes.STRING,
      uplabdakarta_naam: DataTypes.STRING,
      upalabdha_address: DataTypes.STRING,
      sanstha_name:DataTypes.STRING,
      prayojan:DataTypes.STRING,
      xetrafal_temp: DataTypes.STRING,
      xetrafal_perm: DataTypes.STRING,
      samaya_abadhi: DataTypes.STRING,
      rukh_hataunuparne: DataTypes.STRING,
      rukh_hatayeko: DataTypes.STRING,
      sattajagga_area: DataTypes.STRING,
      xetipurti_brixyaropan: DataTypes.STRING,
      sattajagga_brixyaropan: DataTypes.STRING,
      leejrakam_adhyaadhik: DataTypes.STRING,
      barsik_pratibedan: DataTypes.STRING,
      prapta_rajaswo: DataTypes.STRING,
      created_by: DataTypes.STRING,
      updated_by: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "banxetra_anyaprayojan",
    }
  );
  return banxetra_anyaprayojan;
};
