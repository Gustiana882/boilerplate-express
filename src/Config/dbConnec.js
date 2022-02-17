const { Sequelize } = require('sequelize');

const db = new Sequelize({
  username: 'postgres',
  database: 'sekolah',
  password: '12345',
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = db;
