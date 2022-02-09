'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('offices', {
      office_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      office_name: {
        type: Sequelize.STRING
      },
      office_location: {
        type: Sequelize.STRING
      },
      dist_id: {
        type: Sequelize.INTEGER
      },
      office_type: {
        type: Sequelize.INTEGER
      },
      created_by: {
        type: Sequelize.STRING
      },
      updated_by: {
        type: Sequelize.STRING
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
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('offices');
  }
};