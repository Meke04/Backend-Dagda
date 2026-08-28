'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderItem.belongsTo(models.Order, {
        foreignKey: 'orderId'
      });

      OrderItem.belongsTo(models.Product, {
        foreignKey: 'productId'
      });
    }
  }
  OrderItem.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    orderId: {
      type: DataTypes.UUID,
      allowNull: false
    },

    productId: {
      type: DataTypes.UUID,
      allowNull: false
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    unitPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },

    subtotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'OrderItem',
  });
  return OrderItem;
};