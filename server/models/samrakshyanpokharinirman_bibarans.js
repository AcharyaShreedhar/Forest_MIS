'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class samrakshyanpokharinirman_bibarans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  samrakshyanpokharinirman_bibarans.init({
    dist_id: DataTypes.INTEGER,
    office_id: DataTypes.INTEGER,
    paalika: DataTypes.STRING,
    qty: DataTypes.STRING,
    karyakram_miti: DataTypes.STRING,
    laagat: DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'samrakshyanpokharinirman_bibarans',
  });
  return samrakshyanpokharinirman_bibarans;
};