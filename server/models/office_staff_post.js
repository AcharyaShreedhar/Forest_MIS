'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class office_staff_post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  office_staff_post.init({
    dist_id: DataTypes.INTEGER,
    post: DataTypes.STRING,
    kayam_darbandi_sankhya: DataTypes.STRING,
    padpurti_sankhya: DataTypes.STRING,
    khali_sankhya: DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'office_staff_post',
  });
  return office_staff_post;
};