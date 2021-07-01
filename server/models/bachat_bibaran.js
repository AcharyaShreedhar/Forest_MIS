'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bachat_bibaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  bachat_bibaran.init({
    dist_id: DataTypes.INTEGER,
    samuhako_naam: DataTypes.STRING,
    bachatma_gharduri: DataTypes.STRING,
    bachat_rakam: DataTypes.STRING,
    lagani_rakam: DataTypes.STRING,
    sahakariko_rakam: DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bachat_bibaran',
  });
  return bachat_bibaran;
};