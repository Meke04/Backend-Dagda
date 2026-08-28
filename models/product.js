'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    
    static associate(models) {
      Product.belongsToMany(models.Category, {
        through: 'ProductCategories',
        foreignKey: 'productId',
        otherKey: 'categoryId'
      });

      Product.hasMany(models.OrderItem, {
        foreignKey: 'productId'
      });
    
    }
  }
  Product.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },

    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },

    sku: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },

    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'ACTIVE'
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};