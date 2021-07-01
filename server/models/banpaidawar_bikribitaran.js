'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class banpaidawar_bikribitaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  banpaidawar_bikribitaran.init({
    dist_id: DataTypes.INTEGER,
    bandpaidawar_kisim: DataTypes.STRING,
    ekai: DataTypes.STRING,
    aantarik_dar: DataTypes.STRING,
    aantarik_parinam: DataTypes.STRING,
    aantarik_rakam: DataTypes.STRING,
    aaapurti_dar: DataTypes.STRING,
    aapurti_parinam: DataTypes.STRING,
    aapurti_rakam: DataTypes.STRING,
    bahiya_dar:DataTypes.STRING,
    bahiya_parinam:DataTypes.STRING,
    bahiya_rakam:DataTypes.STRING,
    jamma_parinam:DataTypes.STRING,
    jamma_rakam:DataTypes.STRING,
    kul_jamma:DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'banpaidawar_bikribitaran',
  });
  return banpaidawar_bikribitaran;
};