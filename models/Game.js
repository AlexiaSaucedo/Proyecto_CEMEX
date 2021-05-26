const { Sequelize } = require('sequelize');
const {MYSQL_URL_CONNECTION_URL} = require('../config.js');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      // define association here
    }
  }
  Game.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'Game',
    tableName: 'Game'
  });
  Game.sync({alter: true})
  return Game;
}



/*
const sequelize = new Sequelize(MYSQL_URL_CONNECTION_URL)
new Sequelize()
/*
   GAME 
   id: int,
   employeeId: int
   
   JIRAS_IN_GAME
   id: int,
   jira_id: int,
   jira_status: string,
   game_id: int
/*
const GameDataSourceMysql = sequelize.define('Game', {
  id: {
    type: Sequelize.DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  employeeId: {
    type: Sequelize.DataType.INTEGER,
  }
}, {
  sequelize,
  timestamps: true,
  modelName: 'Employee'
})


// TODO PASS THIS DEFINITION TO CORRECT MODULE

const JirasInGame = sequelize.define('JIRAS_IN_GAME', {
  id: {
    type: Sequelize.DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  jira_id: {
    type: Sequelize.DataType.INTEGER,
  },
  jira_status: {
    type: Sequelize.DataType.STRING,
  },
  game_id: {
    type: Sequelize.DataType.INTEGER,
  },
}, {
  sequelize,
  timestamps: true,
  modelName: 'Employee'
})
GameDataSourceMysql.hasMany(JirasInGame)
JirasInGame.belongsTo(GameDataSourceMysql)

export default class {
  constructor() {
    this.GameDataSourceMysql = GameDataSourceMysql
  }
  get(queryObject) {
    return this.GameDataSourceMysql.findAll({ where: queryObject})
  }
  create(queryObject) {
    return this.GameDataSourceMysql.create(queryObject)
  }
}

*/


