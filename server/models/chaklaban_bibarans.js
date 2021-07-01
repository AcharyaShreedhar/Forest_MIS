'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chaklaban_bibarans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  chaklaban_bibarans.init({
    darta_no: DataTypes.STRING,
    dist_id: DataTypes.STRING,
    chaklaban_name: DataTypes.STRING,
    area: DataTypes.STRING,
    main_species: DataTypes.STRING,
    forest_type: DataTypes.STRING,
    handover_date: DataTypes.STRING,
    forest_maujdat:DataTypes.STRING,
    nikasi_timber:DataTypes.STRING,
    nikasi_wood:DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'chaklaban_bibarans',
  });
  return chaklaban_bibarans;
};