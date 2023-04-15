// Connect to DB
// const { Client } = require('pg');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:password@localhost:6543/Apollo');


 



// change the DB_NAME string to whatever your group decides on
// const DB_NAME = 'univ-boilerplate';

// const DB_URL =
//   process.env.DATABASE_URL || `postgres://localhost:5432/${DB_NAME}`;

// let client;

// // github actions client config
// if (process.env.CI) {
//   client = new Client({
//     host: 'localhost',
//     port: 5432,
//     user: 'postgres',
//     password: 'postgres',
//     database: 'postgres',
//   });
// } else {
//   // local / heroku client config
//   client = new Client(DB_URL);
// }

module.exports = sequelize;
