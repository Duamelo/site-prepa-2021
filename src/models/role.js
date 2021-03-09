module.exports = (sequelize, DataTypes) => {


  const attributes = {

    nom_role : {
      type : DataTypes.STRING,
      primaryKey: true,
      allowNull : {
        args: false,
        msg: 'role invalide'
      }
    }

  }
  const Role = sequelize.define('Role', attributes);

 /* Role.associate = (models) => {
    Role.hasMany(models.User, {
      sourceKey: 'nom_role',
      foreignKey: 'role_fk',
      onDelete: 'CASCADE'
    })
  }*/

  return Role;
}