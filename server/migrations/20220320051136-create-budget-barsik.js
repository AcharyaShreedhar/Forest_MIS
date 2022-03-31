'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('budget_barsiks', {
      budget_barsik_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sirshak_id: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
      },
      karyakram_sirshak_id: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
      },
      dist_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      office_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fiscal_year: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      pratham_chaumasik_amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      doshro_chaumasik_amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      teshro_chaumasik_amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      barsik_lakshay_amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
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
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('budget_barsiks')
  },
}
