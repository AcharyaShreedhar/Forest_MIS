"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class nabikaran_karyayojana extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  nabikaran_karyayojana.init(
    {
      dist_id: DataTypes.INTEGER,
      renewal_date: DataTypes.STRING,
      renewed_date: DataTypes.STRING,
      nabikaran_abadhi: DataTypes.STRING,
      darta_id: DataTypes.STRING,
      created_by: DataTypes.STRING,
      updated_by: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "nabikaran_karyayojana",
    }
  );
  return nabikaran_karyayojana;
};
