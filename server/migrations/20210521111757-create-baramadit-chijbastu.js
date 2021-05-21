"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("baramadit_chijbastus", {
      baramadit_chijbastu_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      kath: {
        type: Sequelize.STRING,
      },
      daura: {
        type: Sequelize.STRING,
      },
      aankhetopahar: {
        type: Sequelize.STRING,
      },
      dhunga: {
        type: Sequelize.STRING,
      },
      bojbahak: {
        type: Sequelize.STRING,
      },
      mudda_anusandhan_dayari_id: {
        type: Sequelize.STRING,
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
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("baramadit_chijbastus");
  },
};
