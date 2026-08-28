'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: 'userId'
      });

      Order.belongsTo(models.Address, {
        foreignKey: 'addressId'
      });

      Order.hasMany(models.OrderItem, {
        foreignKey: 'orderId'
      });
    }
  }
  Order.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },

    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'PENDING'
    },

    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },

    shippingCost: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0
    },

    addressId: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};