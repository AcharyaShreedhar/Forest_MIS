"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class vehicles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vehicles.init(
    {
      vehicle_type: DataTypes.STRING,
      vehicle_no: DataTypes.STRING,
      engine_no: DataTypes.STRING,
      chasis_no: DataTypes.STRING,
      acquired_source: DataTypes.STRING,
      acquired_date: DataTypes.STRING,
      acquired_price: DataTypes.STRING,
      manufacturer_country: DataTypes.STRING,
      manufacturer_comp: DataTypes.STRING,
      model_name: DataTypes.STRING,
      manufactured_date: DataTypes.STRING,
      remarks: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "vehicles",
    }
  );
  return vehicles;
};
