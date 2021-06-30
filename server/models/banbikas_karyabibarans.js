'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class banbikas_karyabibarans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  banbikas_karyabibarans.init({
    banbikas_karyabibaran: DataTypes.STRING,
    banbikas_ikai: DataTypes.STRING,
    banbikas_parinam: DataTypes.STRING,
    banbikas_bajetkharcha: DataTypes.STRING,
    ban_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'banbikas_karyabibarans',
  });
  return banbikas_karyabibarans;
};