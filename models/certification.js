"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class certification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      certification.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  certification.init(
    {
      title: DataTypes.STRING,
      date: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "certification",
    }
  );
  return certification;
};
