'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Feedings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      meal: {
        type: Sequelize.ENUM("Breakfast", "Lunch", "Dinner"),
        defaultValue: 'Breakfast'
      },
       rabbitId: {
        type: Sequelize.INTEGER,
				allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Rabbits',
          key: 'id'
        }
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
    await queryInterface.dropTable('Feedings');
  }
};