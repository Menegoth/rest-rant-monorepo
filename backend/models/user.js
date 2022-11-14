'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    canAddPlace() {
      return this.role === "admin"
    }

    canEditPlace() {
      return this.role === "admin"
    }

    canDeletePlace() {
      return this.role === "admin"
    }

    static associate({ Comment }) {
      User.hasMany(Comment, { as: 'author', foreignKey: 'author_id' })
    }

  };
  User.init({
    userId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM,
      values: [
        "reviewer",
        "admin"
      ]
    },
    passwordDigest: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'User',
  });
  return User;
};