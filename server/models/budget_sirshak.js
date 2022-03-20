'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class budget_sirshak extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  budget_sirshak.init(
    {
      sirshak_id: DataTypes.INTEGER,
      dist_id: DataTypes.INTEGER,
      office_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      sirshak_name: DataTypes.STRING,
      sirshak_no: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'budget_sirshak',
    }
  )
  return budget_sirshak
}
