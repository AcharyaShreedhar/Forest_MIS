'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class budget_barsik extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  budget_barsik.init(
    {
      budget_barsik_id: DataTypes.INTEGER,
      sirshak_id: DataTypes.INTEGER,
      karyakram_sirshak_id: DataTypes.INTEGER,
      dist_id: DataTypes.INTEGER,
      office_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      fiscal_year: DataTypes.STRING,
      pratham_chaumasik_amount: DataTypes.INTEGER,
      doshro_chaumasik_amount: DataTypes.INTEGER,
      teshro_chaumasik_amount: DataTypes.INTEGER,
      barsik_lakshya_amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'budget_barsik',
    }
  )
  return budget_barsik
}
