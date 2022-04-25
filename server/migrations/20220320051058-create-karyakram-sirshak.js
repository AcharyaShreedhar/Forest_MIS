'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('karyakram_sirshaks', {
      karyakram_sirshak_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sirshak_id: {
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
      karyakram_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      karyakram_sirshak_no: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('karyakram_sirshaks')
  },
}
