'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class forest_garden_plots extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  forest_garden_plots.init({
    dist_id: DataTypes.INTEGER,
    plot_type: DataTypes.STRING,
    prajati: DataTypes.STRING,
    area: DataTypes.STRING,
    location: DataTypes.STRING,
    established_date: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'forest_garden_plots',
  });
  return forest_garden_plots;
};