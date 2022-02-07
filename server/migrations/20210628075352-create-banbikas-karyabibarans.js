'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('banbikas_karyabibarans', {
      banbikas_karyabibaran_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dist_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      office_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      banbikas_karyabibaran: {
        type: Sequelize.STRING
      },
      banbikas_ikai: {
        type: Sequelize.STRING
      },
      banbikas_parinam: {
        type: Sequelize.STRING
      },
      banbikas_bajetkharcha: {
        type: Sequelize.STRING
      },
      ban_type: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('banbikas_karyabibarans');
  }
};