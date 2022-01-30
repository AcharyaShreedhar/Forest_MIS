'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class activities_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  activities_info.init({
    dist_id: DataTypes.INTEGER,
    office_id: DataTypes.INTEGER,
    samudayikban_naam: DataTypes.STRING,
    fiscal_year: DataTypes.STRING,
    area: DataTypes.STRING,
    production_from_conservation_timber: DataTypes.STRING,
    production_from_conservation_wood: DataTypes.STRING,
    employment_generated_workingday: DataTypes.STRING,
    withingroup_timber: DataTypes.STRING,
    withingroup_wood: DataTypes.STRING,
    outsidegroup_timber: DataTypes.STRING,
    outsidegroup_wood: DataTypes.STRING,
    maujdat_timber: DataTypes.STRING,
    maujdat_wood: DataTypes.STRING,
    annual_income: DataTypes.STRING,
    annual_expenditure: DataTypes.STRING,
    netannual_saving: DataTypes.STRING,
    niyamit_rojgar_count: DataTypes.STRING,
    community_udhyam_bibaran: DataTypes.STRING,
    annual_bibaran: DataTypes.STRING,
    lekha_parikshyan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'activities_info',
  });
  return activities_info;
};