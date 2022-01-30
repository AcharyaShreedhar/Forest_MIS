'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  department.init({
    dist_id: DataTypes.INTEGER,
    dept_name_nep: DataTypes.STRING,
    dept_name_eng: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'department',
  });
  return department;
};