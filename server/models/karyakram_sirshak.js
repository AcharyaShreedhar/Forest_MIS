'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class karyakram_sirshak extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  karyakram_sirshak.init(
    {
      karyakram_sirshak_id: DataTypes.INTEGER,
      sirshak_id: DataTypes.INTEGER,
      dist_id: DataTypes.INTEGER,
      office_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      karyakram_name: DataTypes.STRING,
      karyakram_karyakram_sirshak_no: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'karyakram_sirshak',
    }
  )
  return karyakram_sirshak
}
