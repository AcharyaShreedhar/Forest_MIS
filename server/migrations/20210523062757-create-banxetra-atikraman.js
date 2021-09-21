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
      dist_id: {
        type: Sequelize.INTEGER,
      },
      atikramit_area: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      atikraman_kisim: {
        type: Sequelize.STRING,
      },
      dalit_ghardhuri: {
        type: Sequelize.INTEGER,
      },
      janjati_ghardhuri: {
        type: Sequelize.INTEGER,
      },
      anya_ghardhuri: {
        type: Sequelize.INTEGER,
      },
      atikraman_miti: {
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
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("banxetra_atikramans");
  },
};
