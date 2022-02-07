'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jadibutis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  jadibutis.init({
    dist_id: DataTypes.INTEGER,
    office_id: DataTypes.INTEGER,
    jadibuti_thegana: DataTypes.STRING,
    jadibuti_kisim: DataTypes.STRING,
    jadibuti_prajati: DataTypes.STRING,
    jadibuti_laxya: DataTypes.STRING,
    jadibuti_pragati: DataTypes.STRING,
    jadibuti_sankhya: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'jadibutis',
  });
  return jadibutis;
};