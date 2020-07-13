const config = require("./index");

const db = config.db;
const username = db.username;
console.log('username config: ', username)
const password = db.password;
const database = db.database;
console.log('database config: ', database)

const host = db.host;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: "postgres",
  },
  production: {
    use_env_variable: 'DATABASE_URL',
  }
};
