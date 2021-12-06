//helps or imports sequelize for global use. index will help figure out where we are running local or not.
let { Sequelize, DataTypes } = require('sequelize')

let env = process.env.NODE_ENV || 'development'
/*if app is running at Heroku, Heroku will set an enviorment.
variable called NODE_ENV which will have the value 'production'
so the env variable in this code will be production*/

/* if the app is running on my computer then env will be 'delevopment'
app will use SQLite.*/

let config = require(__dirname + '/../config.json')[env]

let db = {}//empty object.

let sequelize 

if (config.use_env_variable) {
    //at Heroku, progres and production.
    sequelize = new Sequelize(process.env[config.use_env_variable], config)
    //running local enviroment 3000, development.
} else{
    //at heroku use postgress.
    sequelize = new Sequelize(config)
}
//returns a function from modules export.
let studentModel = require('./student')(sequelize, DataTypes)
//this will configure the empty object.
db[studentModel.name] = studentModel

db.sequelize = sequelize  //info on how to connect to the DATABASE.
db.Sequelize = Sequelize //reference to sequelize library.

module.exports = db


