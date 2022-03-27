'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('budget_karmacharidetails', {
      budget_karmacharidetail_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sirshak_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      karyakram_sirshak_id: {
        allowNull: false,
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
        allowNull: false,
      },
      expense_month: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      expense_year: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      expense_amount: {
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
    await queryInterface.dropTable('budget_karmacharidetails')
  },
}
