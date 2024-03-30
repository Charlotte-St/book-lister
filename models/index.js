const Book = require('./Book');
const User = require('./User');
const List = require('./List');
const ListItem = require('./ListItem');

User.hasMany(List, {
    foreignKey: 'userId'
});

List.belongsTo(User);

Book.belongsToMany(List, {
    through: {
        model: ListItem,
        foreignKey: 'listId',
        unique: false
    }
});

List.belongsToMany(Book, {
    through: {
        model: ListItem, 
        foreignKey: 'bookId',
        unique: false
    }
});
module.exports = {Book, User, List, ListItem};