const Book = require('./Book');
const User = require('./User');
const List = require('./List');

const ListItem = require('./ListItem');

User.hasMany(List, {
    foreignKey: 'user_id'
});

List.belongsTo(User);

Book.belongsToMany(List, {
    through: 'ListItem'
});

List.belongsToMany(Book, {
    through: 'ListItem'
});
module.exports = {Book, User, List, ListItem};