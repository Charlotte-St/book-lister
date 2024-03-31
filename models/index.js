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
        foreignKey: 'list_id',
        unique: false
    }
});

List.belongsToMany(Book, {
    through: {
        model: ListItem, 
        foreignKey: 'book_id',
        unique: false
    }
});
module.exports = {Book, User, List, ListItem};