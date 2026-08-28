'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Address, {
        foreignKey: 'userId'
      });

      User.hasMany(models.Order, {
        foreignKey: 'userId'
      });
    }

  }
  User.init({
    name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },

    cpf: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },

    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },

    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'CUSTOMER'
    },

    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'ACTIVE'
    },

    emailVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};