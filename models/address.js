'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {

    static associate(models) {
      Address.belongsTo(models.User, {
        foreignKey: 'userId'
      });
    }

  }

  Address.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    street: {
      type: DataTypes.STRING,
      allowNull: false
    },

    number: {
      type: DataTypes.STRING,
      allowNull: false
    },

    complement: {
      type: DataTypes.STRING,
      allowNull: true
    },

    neighborhood: {
      type: DataTypes.STRING,
      allowNull: false
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false
    },

    zipCode: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'Address',
  });

  return Address;
};