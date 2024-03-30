const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        olid: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        oclc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pages: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        genre: {
            type: DataTypes.STRING, 
            allowNull: true
        }, 
        descr: {
            type: DataTypes.TEXT, 
            allowNull: true
        }
    },
    {
        sequelize, 
        timestamps: false, 
        freezeTableName: true, 
        underscored: true,
        modelName: 'book'
    }
)
module.exports = Book;