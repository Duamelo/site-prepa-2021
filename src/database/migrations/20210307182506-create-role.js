'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('role', {
   
      nom_role : {
        type : Sequelize.STRING,
        primaryKey: true,
        allowNull : {
          args: false,
          msg: 'role invalide'
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
  down: async (queryInterface /*Sequelize*/) => {
    await queryInterface.dropTable('role');
  }
};