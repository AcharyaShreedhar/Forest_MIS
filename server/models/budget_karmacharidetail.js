'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class budget_karmacharidetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  budget_karmacharidetail.init(
    {
      budget_karmacharidetail_id: DataTypes.INTEGER,
      sirshak_id: DataTypes.INTEGER,
      karyakram_sirshak_id: DataTypes.INTEGER,
      dist_id: DataTypes.INTEGER,
      office_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      fiscal_year: DataTypes.STRING,
      expense_year: DataTypes.STRING,
      expense_month: DataTypes.STRING,
      expense_amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'budget_karmacharidetail',
    }
  )
  return budget_karmacharidetail
}
