"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("consumer_details", {
      consumer_group_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dist_id: {
        type: Sequelize.INTEGER,
      },
      darta_no: {
        type: Sequelize.STRING,
      },
      pan_no: {
        type: Sequelize.STRING,
      },
      darta_miti: {
        type: Sequelize.STRING,
      },
      dalit_ghardhuri: {
        type: Sequelize.INTEGER,
      },
      perm_addr: {
        type: Sequelize.STRING,
      },
      curr_addr: {
        type: Sequelize.STRING,
      },
      janjati_ghardhuri: {
        type: Sequelize.INTEGER,
      },
      anya_ghardhuri: {
        type: Sequelize.INTEGER,
      },
      female: {
        type: Sequelize.INTEGER,
      },
      male: {
        type: Sequelize.INTEGER,
      },
      samudayik_upavokta_samiti_name: {
        type: Sequelize.STRING,
      },
      sampanna: {
        type: Sequelize.INTEGER,
      },
      madhyam: {
        type: Sequelize.INTEGER,
      },
      bipanna: {
        type: Sequelize.INTEGER,
      },
      dalit_rep: {
        type: Sequelize.INTEGER,
      },
      janjati_rep: {
        type: Sequelize.INTEGER,
      },
      anya_rep: {
        type: Sequelize.INTEGER,
      },
      female_rep: {
        type: Sequelize.INTEGER,
      },
      male_rep: {
        type: Sequelize.INTEGER,
      },
      adhyakshya: {
        type: Sequelize.STRING,
      },
      sachib: {
        type: Sequelize.STRING,
      },
      adhyakshya_gender: {
        type: Sequelize.STRING,
      },
      sachib_gender: {
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
    await queryInterface.dropTable("consumer_details");
  },
};
