"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("banxetra_atikramans", {
      banxetra_atikraman_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      atikramit_area: {
        type: Sequelize.STRING,
      },
      atikraman_kisim: {
        type: Sequelize.STRING,
      },
      samalagna_ghardhuri: {
        type: Sequelize.STRING,
      },
      atikraman_prayojan: {
        type: Sequelize.STRING,
      },
      samrachana_bibaran: {
        type: Sequelize.STRING,
      },
      atikraman_abastha: {
        type: Sequelize.STRING,
      },
      created_by: {
        type: Sequelize.STRING,
      },
      updated_by: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("banxetra_atikramans");
  },
};
