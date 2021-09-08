"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class consumer_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  consumer_details.init(
    {
      dist_id: DataTypes.INTEGER,
      darta_no: DataTypes.STRING,
      pan_no:DataTypes.STRING,
      samudayik_upavokta_samiti_name: DataTypes.STRING,
      darta_miti: DataTypes.STRING,
      perm_addr: DataTypes.STRING,
      curr_addr: DataTypes.STRING,
      dalit_ghardhuri: DataTypes.INTEGER,
      janjati_ghardhuri: DataTypes.INTEGER,
      anya_ghardhuri: DataTypes.INTEGER,
      female: DataTypes.INTEGER,
      male: DataTypes.INTEGER,
      sampanna: DataTypes.INTEGER,
      madhyam: DataTypes.INTEGER,
      bipanna: DataTypes.INTEGER,
      dalit_rep: DataTypes.INTEGER,
      janjati_rep: DataTypes.INTEGER,
      anya_rep: DataTypes.INTEGER,
      female_rep: DataTypes.INTEGER,
      male_rep: DataTypes.INTEGER,
      adhyakshya: DataTypes.STRING,
      sachib: DataTypes.STRING,
      adhyakshya_gender: DataTypes.STRING,
      sachib_gender: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "consumer_details",
    }
  );
  return consumer_details;
};
