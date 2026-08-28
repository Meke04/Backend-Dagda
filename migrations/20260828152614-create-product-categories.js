'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductCategories', {

      productId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
            model: 'Products',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      categoryId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
            model: 'Categories',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      uniqueKeys: {
        product_category_unique: {
          fields: ['productId', 'categoryId']
        }
      }
    });
  },

  async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('ProductCategories');
  }
};
