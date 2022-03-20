'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class month extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  month.init(
    {
      month_id: DataTypes.INTEGER,
      month_name: DataTypes.STRING,
      month_quater: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'month',
    }
  )
  return month
}
