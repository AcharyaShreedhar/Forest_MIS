'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class assets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  assets.init({
    dist_id: DataTypes.INTEGER,
    asset_type: DataTypes.STRING,
    asset_loc: DataTypes.STRING,
    kitta_no: DataTypes.STRING,
    home_area: DataTypes.STRING,
    land_area: DataTypes.STRING,
    unit: DataTypes.STRING,
    remarks: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'assets',
  });
  return assets;
};