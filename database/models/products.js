'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    name: DataTypes.STRING,
    preco: DataTypes.STRING,
    quantidade: DataTypes.STRING,
    descricao: DataTypes.STRING,
    imagem: DataTypes.STRING,
    categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};