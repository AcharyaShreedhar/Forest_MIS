"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("kabuliyatiban_bibarans", {
      kabuliyatiban_bibaran_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      entry_date: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ghardhuri_dalit: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      perm_addr: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      curr_addr: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ghardhuri_janjati: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ghardhuri_anya: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ghardhuri_total: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      population_female: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      population_male: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      population_total: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      samudayik_upavokta_samiti_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sampannata_starikaran_sampanna: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sampannata_starikaran_madhyam: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sampannata_starikaran_bipanna: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      karyasamiti_representation_dalit: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      karyasamiti_representation_janjati: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      karyasamiti_representation_anya: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      adhyakshya_male: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      adhyakshya_female: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sachib_male: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sachib_female: {
        allowNull: false,
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
    await queryInterface.dropTable("kabuliyatiban_bibarans");
  },
};
