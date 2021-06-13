"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class consumer_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  consumer_details.init(
    {
      registration_no: DataTypes.STRING,
      registration_date: DataTypes.STRING,
      consumer_group_name: DataTypes.STRING,
      ghardhuri_dalit: DataTypes.STRING,
      perm_addr: DataTypes.STRING,
      curr_addr: DataTypes.STRING,
      ghardhuri_janjati: DataTypes.STRING,
      ghardhuri_anya: DataTypes.STRING,
      ghardhuri_total: DataTypes.STRING,
      population_female: DataTypes.STRING,
      population_male: DataTypes.STRING,
      population_total: DataTypes.STRING,
      samudayik_upavokta_samiti_name: DataTypes.STRING,
      sampannata_starikaran_sampanna: DataTypes.STRING,
      sampannata_starikaran_madhyam: DataTypes.STRING,
      sampannata_starikaran_bipanna: DataTypes.STRING,
      karyasamiti_representation_dalit: DataTypes.STRING,
      karyasamiti_representation_janjati: DataTypes.STRING,
      karyasamiti_representation_anya: DataTypes.STRING,
      adhyakshya_male: DataTypes.STRING,
      adhyakshya_female: DataTypes.STRING,
      sachib_male: DataTypes.STRING,
      sachib_female: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "consumer_details",
    }
  );
  return consumer_details;
};
