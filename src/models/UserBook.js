// src/models/UserBook.js

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, _DataTypes) => {
  const UserBook = sequelize.define(
    'UserBook',
    {},
    {
      timestamps: false,
      underscored: true,
      tableName: 'users_books',
    },
  );

  return UserBook;
};