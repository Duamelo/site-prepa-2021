module.exports = (sequelize, DataTypes) => {


  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nom: {
      type : DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'S\'il vous plaît entrez un nom'
      }
    },
    prenom : {
      type : DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'S\'il vous plaît entrez un prénom'
      }
    },

    data_naissance : {
      type : DataTypes.STRING,
      allowNull : {
        args: false,
        msg: 'S\'il vous plaît entre date de naissance valide'
      }
    },

    mot_de_passe : {
      type : DataTypes.STRING,
      allowNull : {
        args: false,
        msg: 'Votre mot de passe doit dépasser 5 chiffres et contenir des lettres des chiffres'
      }
    },

    mot_de_passe2 : {
      type : DataTypes.STRING,
      allowNull : {
        args: false,
        msg: 'Votre mot de passe doit dépasser 5 chiffres et contenir des lettres des chiffres'
      }
    },
    email : {
      type : DataTypes.STRING,
      allowNull : {
        args: false,
        msg: 'email incorrect'
      }
    },

    telephone : {
      type : DataTypes.INTEGER,
      allowNull : {
        args: false,
        msg: 'Veuillez précisez l\'indicatif du pays'
      }
    },

    pays : {
      type : DataTypes.STRING,
      allowNull : {
        args: false,
        msg: 'oups'
      }
    },

   /* nom_role: {
      type: Sequelize.STRING,
      references: { model: 'Role', key: 'role_name' }
    
    }*/
  }

  const User = sequelize.define('User', attributes);

  /*User.associate = (models) => {
    User.belongsTo(models.Role);
  }
  */
  return User;
}