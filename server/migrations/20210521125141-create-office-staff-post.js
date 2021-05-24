"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("office_staff_posts", {
      office_staff_post_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      post: {
        type: Sequelize.STRING,
      },
      kayam_darbandi_sankhya: {
        type: Sequelize.STRING,
      },
      padpurti_sankhya: {
        type: Sequelize.STRING,
      },
      khali_sankhya: {
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
    await queryInterface.dropTable("office_staff_posts");
  },
};
