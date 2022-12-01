'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Clients.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    promocao: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Clients',
  });
  return Clients;
};