const sequelize= require('./client');
const models = require('./models');

module.exports = {
  sequelize,
  ...models,
};
