'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rabbit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rabbit.hasMany(models.Feeding, {
        foreignKey: 'rabbitId',
        as: 'feedings'
      })
  
    }
  }
  Rabbit.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Rabbit',
  });
  return Rabbit;
};