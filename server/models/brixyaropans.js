'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brixyaropans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  brixyaropans.init({
    dist_id: DataTypes.INTEGER,
    brixyaropan_thegana: DataTypes.STRING,
    brixyaropan_kisim: DataTypes.STRING,
    brixyaropan_laxya: DataTypes.STRING,
    brixyaropan_prajati: DataTypes.STRING,
    brixyaropan_pragati: DataTypes.STRING,
    brixyaropan_sankhya: DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'brixyaropans',
  });
  return brixyaropans;
};