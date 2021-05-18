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
      area: DataTypes.STRING,
      area: DataTypes.STRING,
      main_species: DataTypes.STRING,
      forest_type: DataTypes.STRING,
      handover_date: DataTypes.STRING,
      renewal_first_date: DataTypes.STRING,
      renewal_first_period: DataTypes.STRING,
      renewal_second_date: DataTypes.STRING,
      renewal_second_period: DataTypes.STRING,
      renewal_third_date: DataTypes.STRING,
      renewal_third_period: DataTypes.STRING,
      renewal_fourth_date: DataTypes.STRING,
      renewal_fourth_period: DataTypes.STRING,
      renewal_fifth_date: DataTypes.STRING,
      renewal_fifth_period: DataTypes.STRING,
      renewal_sixth_date: DataTypes.STRING,
      renewal_fixth_period: DataTypes.STRING,
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
