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
      darta_no: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      entry_date: {
        type: Sequelize.STRING,
      },
      ghardhuri_dalit: {
        type: Sequelize.STRING,
      },
      perm_addr: {
        type: Sequelize.STRING,
      },
      curr_addr: {
        type: Sequelize.STRING,
      },
      ghardhuri_janjati: {
        type: Sequelize.STRING,
      },
      ghardhuri_anya: {
        type: Sequelize.STRING,
      },
      ghardhuri_total: {
        type: Sequelize.STRING,
      },
      population_female: {
        type: Sequelize.STRING,
      },
      population_male: {
        type: Sequelize.STRING,
      },
      population_total: {
        type: Sequelize.STRING,
      },
      samudayik_upavokta_samiti_name: {
        type: Sequelize.STRING,
      },
      sampannata_starikaran_sampanna: {
        type: Sequelize.STRING,
      },
      sampannata_starikaran_madhyam: {
        type: Sequelize.STRING,
      },
      sampannata_starikaran_bipanna: {
        type: Sequelize.STRING,
      },
      karyasamiti_representation_dalit: {
        type: Sequelize.STRING,
      },
      karyasamiti_representation_janjati: {
        type: Sequelize.STRING,
      },
      karyasamiti_representation_anya: {
        type: Sequelize.STRING,
      },
      adhyakshya_male: {
        type: Sequelize.STRING,
      },
      adhyakshya_female: {
        type: Sequelize.STRING,
      },
      sachib_male: {
        type: Sequelize.STRING,
      },
      sachib_female: {
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
    await queryInterface.dropTable("kabuliyatiban_bibarans");
  },
};
