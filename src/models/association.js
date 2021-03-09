function  applyExtraAssociation (sequelize){
    const { User , Role } = sequelize.models;
    Role.hasMany(models.User, {
        as: 'role',
        foreignKey: 'nom_role',
        onDelete: 'CASCADE',
        allowNull: false
      });
      
    User.belongsTo(Role);
}


module.exports = { applyExtraAssociation };