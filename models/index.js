const Book = require('./Book');
const User = require('./User');
const List = require('./List');
const ListItem = require('./ListItem');

User.hasMany(List, {
    foreignKey: 'user_id'
});

List.belongsTo(User);

Book.belongsToMany(List, {
    through: {
        model: ListItem,
        unique: false
    }
});

List.belongsToMany(Book, {
    through: {
        model: ListItem, 
        unique: false
    }
});
module.exports = {Book, User, List, ListItem};