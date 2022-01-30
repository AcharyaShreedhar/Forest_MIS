"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class dharmikban_bibaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dharmikban_bibaran.init(
    {
      dist_id: DataTypes.INTEGER,
      dharmikban_name: DataTypes.STRING,
      darta_no: DataTypes.STRING,
      community_name: DataTypes.STRING,
      dalit_ghardhuri: DataTypes.INTEGER,
      janjati_ghardhuri: DataTypes.INTEGER,
      anya_ghardhuri: DataTypes.INTEGER,
      female: DataTypes.INTEGER,
      male: DataTypes.INTEGER,
      area: DataTypes.STRING,
      main_species: DataTypes.STRING,
      forest_type: DataTypes.STRING,
      handover_date: DataTypes.STRING,
      forest_maujdat: DataTypes.STRING,
      renewaldate: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "dharmikban_bibaran",
    }
  );
  return dharmikban_bibaran;
};
