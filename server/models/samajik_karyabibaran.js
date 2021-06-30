'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class samajik_karyabibaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  samajik_karyabibaran.init({
    samajik_karyabibaran: DataTypes.STRING,
    samajik_ekai: DataTypes.STRING,
    samajik_parinam: DataTypes.STRING,
    samajik_bajetkharcha: DataTypes.STRING,
    ban_type: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'samajik_karyabibaran',
  });
  return samajik_karyabibaran;
};