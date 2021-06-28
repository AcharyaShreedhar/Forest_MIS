'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('brixyaropans', {
      brixyaropan_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brixyaropan_thegana: {
        type: Sequelize.STRING
      },
      brixyaropan_kisim: {
        type: Sequelize.STRING
      },
      brixyaropan_laxya: {
        type: Sequelize.STRING
      },
      brixyaropan_prajati: {
        type: Sequelize.STRING
      },
      brixyaropan_pragati: {
        type: Sequelize.STRING
      },
      brixyaropan_sankhya: {
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
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('brixyaropans');
  }
};