"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recruter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  recruter.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      location: DataTypes.STRING,
      isRecruting: DataTypes.BOOLEAN,
      jobDescription: DataTypes.STRING,
      jobTitle: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "recruter",
    }
  );
  return recruter;
};
