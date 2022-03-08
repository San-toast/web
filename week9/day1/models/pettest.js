'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class petTest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  petTest.init({
    type: DataTypes.STRING,
    species: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'petTest',
  });
  return petTest;
};