"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class samudayikban_bibaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  samudayikban_bibaran.init(
    {
      samudayikban_name: DataTypes.STRING,
      darta_no: DataTypes.STRING,
      area: DataTypes.STRING,
      area: DataTypes.STRING,
      main_species: DataTypes.STRING,
      forest_type: DataTypes.STRING,
      handover_date: DataTypes.STRING,
      forest_maujdat: DataTypes.STRING,
      nikasi_timber: DataTypes.STRING,
      nikasi_wood: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "samudayikban_bibaran",
    }
  );
  return samudayikban_bibaran;
};
