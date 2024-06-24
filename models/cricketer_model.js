const sequelize = require('../util/database')
const Sequelize = require('sequelize')

const cricketer_model = sequelize.define('cricketers',{
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    dob:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    photo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    birthplace:{
        type: Sequelize.STRING,
        allowNull: false
    },
    career:{
        type: Sequelize.STRING,
        allowNull: false
    },
    matches:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    score:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    fifties:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    centuries:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    wickets:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    average:{
        type: Sequelize.INTEGER,
        allowNull: true
    }
},{timestamps: false})

module.exports = cricketer_model