'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nijiban_bibaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  nijiban_bibaran.init({
    dist_id: DataTypes.INTEGER,
    darta_no: DataTypes.STRING,
    swikrit_miti: DataTypes.STRING,
    nijiban_dhaniko_naam: DataTypes.STRING,
    perm_addr: DataTypes.STRING,
    curr_addr: DataTypes.STRING,
    area: DataTypes.STRING,
    main_species: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'nijiban_bibaran',
  });
  return nijiban_bibaran;
};