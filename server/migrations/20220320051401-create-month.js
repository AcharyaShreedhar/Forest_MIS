'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('months', {
      month_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      month_name: {
        type: Sequelize.STRING,
      },
      month_quater: {
        type: Sequelize.INTEGER,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('months')
  },
}
