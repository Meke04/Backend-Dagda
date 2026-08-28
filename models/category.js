'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {

    static associate(models) {
      Category.belongsToMany(models.Product, {
        through: 'ProductCategories',
        foreignKey: 'categoryId',
        otherKey: 'productId'
      });
    }
  }

  Category.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};