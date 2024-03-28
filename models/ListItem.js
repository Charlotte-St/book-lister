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
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        list_desc: {
            type: DataTypes.STRING,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            references: {
                model: 'user',
                foreign_key: 'id'
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
)
module.exports = ListItem;