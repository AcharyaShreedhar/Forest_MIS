'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class office extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  office.init({
    office_id: DataTypes.INTEGER,
    office_name: DataTypes.STRING,
    office_location: DataTypes.STRING,
    dist_id: DataTypes.INTEGER,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'offices',
  });
  return office;
};