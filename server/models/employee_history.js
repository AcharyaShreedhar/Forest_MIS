"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class employee_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employee_history.init(
    {
      hist_date: DataTypes.STRING,
      emp_id: DataTypes.INTEGER,
      emp_office_id: DataTypes.INTEGER,
      emp_dept_id: DataTypes.INTEGER,
      emp_level_id: DataTypes.INTEGER,
      emp_post_id: DataTypes.INTEGER,
      emp_rank_id: DataTypes.INTEGER,
      emp_status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "employee_history",
    }
  );
  return employee_history;
};

