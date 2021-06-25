'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('uddhyam_bibarans', {
      uddhyam_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      niji_uddhyam_sankhya: {
        type: Sequelize.STRING
      },
      niji_rojgari_sankhya: {
        type: Sequelize.STRING
      },
      samudayik_uddhyam_sankhya: {
        type: Sequelize.STRING
      },
      samudayik_rojgari_sankhya: {
        type: Sequelize.STRING
      },
      sahakari_uddhyam_sankhya: {
        type: Sequelize.STRING
      },
      sahakari_rojgari_sankhya: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.STRING,
      },
      updated_by: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('uddhyam_bibarans');
  }
};