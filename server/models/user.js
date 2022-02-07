'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    dist_id: DataTypes.INTEGER,
    office_id: DataTypes.INTEGER,
    user_type: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    user_pass: DataTypes.STRING,
    user_token:DataTypes.STRING,
    user_office:DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};