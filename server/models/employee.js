"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employee.init(
    {
      dist_id: DataTypes.INTEGER,
      emp_fname_eng: DataTypes.STRING,
      emp_lname_eng: DataTypes.STRING,
      emp_fname_nep: DataTypes.STRING,
      emp_lname_nep: DataTypes.STRING,
      emp_add_perm_prov: DataTypes.INTEGER,
      emp_add_perm_dist: DataTypes.INTEGER,
      emp_add_perm_mun: DataTypes.INTEGER,
      emp_add_perm_ward: DataTypes.INTEGER,
      emp_add_perm_tole: DataTypes.INTEGER,
      emp_add_temp_prov: DataTypes.INTEGER,
      emp_add_temp_dist: DataTypes.INTEGER,
      emp_add_temp_mun: DataTypes.INTEGER,
      emp_add_temp_ward: DataTypes.INTEGER,
      emp_add_temp_tole: DataTypes.INTEGER,
      emp_phone1: DataTypes.STRING,
      emp_phone2: DataTypes.STRING,
      emp_email: DataTypes.STRING,
      emp_office_id: DataTypes.INTEGER,
      emp_dept_id: DataTypes.INTEGER,
      emp_level_id: DataTypes.INTEGER,
      emp_post: DataTypes.INTEGER,
      emp_rank: DataTypes.INTEGER,
      emp_appoint_date: DataTypes.DATE,
      emp_status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "employee",
    }
  );
  return employee;
};
