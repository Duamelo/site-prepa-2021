'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
      date_naissance: {
        type: Sequelize.STRING
      },
      mot_de_passe: {
        type: Sequelize.STRING
      },
      mot_de_passe2: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.STRING
      },
      pays: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

   /*   nom_role: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Role',
          key: 'nom_role'
        }
      }*/
    });
  },
  down: async (queryInterface /*Sequelize*/) => {
    await queryInterface.dropTable('user');
  }
};