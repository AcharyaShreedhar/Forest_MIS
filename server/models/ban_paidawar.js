'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ban_paidawar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ban_paidawar.init({
    dist_id: DataTypes.INTEGER,
    ban_id: DataTypes.STRING,
    arthik_barsa: DataTypes.STRING,
    mahina: DataTypes.STRING,
    kaath: DataTypes.STRING,
    daura: DataTypes.STRING,
    lavgrahi_sankhya: DataTypes.STRING,
    mulyaabhibridi_kar: DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ban_paidawar',
  });
  return ban_paidawar;
};