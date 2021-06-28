'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rojgar_srijanas', {
      rojgar_srijana_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      karyaharu: {
        type: Sequelize.STRING
      },
      ekai :{
        type: Sequelize.STRING,
      },
      banka_prakar:{
        type: Sequelize.STRING,
      },
      mahila:{
        type:Sequelize.STRING,
      },
      purus:{
        type:Sequelize.STRING,
      },
      jamma:{
        type:Sequelize.STRING,
      },
      kaifiyat:{
        type:Sequelize.STRING,
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
    await queryInterface.dropTable('rojgar_srijanas');
  }
};