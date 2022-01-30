'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class anya_sampatis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  anya_sampatis.init({
    sampati_name: DataTypes.STRING,
    office_id: DataTypes.INTEGER,
    dist_id: DataTypes.INTEGER,
    sampati_location: DataTypes.STRING,
    acquired_date: DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'anya_sampatis',
  });
  return anya_sampatis;
};