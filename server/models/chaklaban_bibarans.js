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
    darta_no: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'chaklaban_bibarans',
  });
  return chaklaban_bibarans;
};