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

  UserBook.associate = ({User, Book}) => {
    User.belongsToMany(Book,{
      foreignKey: 'userId',
      otherKey: 'bookId',
      through: UserBook,
      as: 'books'
    });
    Book.belongsToMany(User, {
      foreignKey: 'bookId',
      otherKey: 'userId',
      through: UserBook,
      as: 'users'
    });
  }
  return UserBook;
};