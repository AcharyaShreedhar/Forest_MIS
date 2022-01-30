"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("employees", {
      emp_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dist_id:{
        type: Sequelize.INTEGER,
      },
      emp_fname_eng: {
        type: Sequelize.STRING,
      },
      emp_lname_eng: {
        type: Sequelize.STRING,
      },
  
      emp_fname_nep: {
        type: Sequelize.STRING,
      },
      emp_lname_nep: {
        type: Sequelize.STRING,
      },
      emp_add_perm_prov: {
        type: Sequelize.INTEGER,
      },
      emp_add_perm_dist: {
        type: Sequelize.INTEGER,
      },
      emp_add_perm_mun: {
        type: Sequelize.INTEGER,
      },
      emp_add_perm_ward: {
        type: Sequelize.INTEGER,
      },
      emp_add_perm_tole: {
        type: Sequelize.INTEGER,
      },
      emp_add_temp_prov: {
        type: Sequelize.INTEGER,
      },
      emp_add_temp_dist: {
        type: Sequelize.INTEGER,
      },
      emp_add_temp_mun: {
        type: Sequelize.INTEGER,
      },
      emp_add_temp_ward: {
        type: Sequelize.INTEGER,
      },
      emp_add_temp_tole: {
        type: Sequelize.INTEGER,
      },
      emp_phone1: {
        type: Sequelize.STRING,
      },
      emp_phone2: {
        type: Sequelize.STRING,
      },
      emp_email: {
        type: Sequelize.STRING,
      },
      emp_office_id: {
        type: Sequelize.INTEGER,
      },
      emp_dept_id: {
        type: Sequelize.INTEGER,
      },
      emp_level_id: {
        type: Sequelize.INTEGER,
      },
      emp_post: {
        type: Sequelize.STRING,
      },
      emp_rank: {
        type: Sequelize.INTEGER,
      },
      emp_appoint_date: {
        type: Sequelize.STRING,
      },
      emp_status: {
        type: Sequelize.STRING,
      },

      created_by: {
        type: Sequelize.STRING,
      },
      updated_by: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("employees");
  },
};
