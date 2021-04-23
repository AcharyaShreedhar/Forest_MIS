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
      emp_fname_eng: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      emp_lname_eng: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      emp_fname_nep: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      emp_lname_nep: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      emp_add_perm_prov: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      emp_add_perm_dist: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      emp_add_perm_mun: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      emp_add_perm_ward: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      emp_add_perm_tole: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      emp_add_temp_prov: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      emp_add_temp_dist: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      emp_add_temp_mun: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      emp_add_temp_ward: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      emp_add_temp_tole: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      emp_phone1: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      emp_phone2: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      emp_email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      emp_office_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      emp_dept_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      emp_level_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      emp_post: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      emp_rank: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      emp_appoint_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      emp_status: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("employees");
  },
};
