'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    Username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 26]
      }
    }
  }, 
  {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Todo)
      }
    }
  });
  return User;
};