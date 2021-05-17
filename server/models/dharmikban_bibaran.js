"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class dharmikban_bibaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dharmikban_bibaran.init(
    {
      dharmikban_name: DataTypes.STRING,
      community_name: DataTypes.STRING,
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
      forest_maujdat: DataTypes.STRING,
      renewaldate: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "dharmikban_bibaran",
    }
  );
  return dharmikban_bibaran;
};
