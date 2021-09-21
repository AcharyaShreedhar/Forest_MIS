"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class banxetra_atikraman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  banxetra_atikraman.init(
    {
      dist_id: DataTypes.INTEGER,
      atikramit_area: DataTypes.STRING,
      address: DataTypes.STRING,
      atikraman_kisim: DataTypes.STRING,
      dalit_ghardhuri: DataTypes.INTEGER,
      janjati_ghardhuri: DataTypes.INTEGER,
      anya_ghardhuri: DataTypes.INTEGER,
      atikraman_miti: DataTypes.STRING,
      atikraman_prayojan: DataTypes.STRING,
      samrachana_bibaran: DataTypes.STRING,
      atikraman_abastha: DataTypes.STRING,
      created_by: DataTypes.STRING,
      updated_by: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "banxetra_atikraman",
    }
  );
  return banxetra_atikraman;
};
