const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class List extends Model {}

List.init(
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
        listDesc: {
            type: DataTypes.STRING,
            allowNull: true
        },
        userId: {
            type: DataTypes.INTEGER, 
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
        modelName: 'list'
    }
)
module.exports = List;