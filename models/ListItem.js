const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class ListItem extends Model {}

ListItem.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        }, 
        listId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'list',
                foreign_key: 'id',
                unique: false
            }
        },
        bookId: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            references: {
                model: 'book',
                foreign_key: 'id',
                unique: false
            }
        }
    },
    {
        sequelize, 
        timestamps: false, 
        freezeTableName: true, 
        underscored: true,
        modelName: 'listitem'
    }
);

module.exports = ListItem;