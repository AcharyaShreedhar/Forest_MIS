'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sajhedariban_bibarans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  sajhedariban_bibarans.init({
    darta_no: DataTypes.STRING,
    darta_miti: DataTypes.STRING,
    dist_id: DataTypes.STRING,
    sajhedariban_naam: DataTypes.STRING,
    address: DataTypes.STRING,
    qty:DataTypes.STRING,
    area: DataTypes.STRING,
    main_species: DataTypes.STRING,
    ghardhuri: DataTypes.STRING,
    lav_jana: DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sajhedariban_bibarans',
  });
  return sajhedariban_bibarans;
};