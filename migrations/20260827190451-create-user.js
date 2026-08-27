'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },

      name: {
        type: Sequelize.STRING(150),
        allowNull: false
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false
      },

      phone: {
        type: Sequelize.STRING,
        allowNull: true
      },

      cpf: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },

      dateOfBirth: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },

      role: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'CUSTOMER'
      },

      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'ACTIVE'
      },

      emailVerified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};