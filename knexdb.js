var settings = require(`./settings`)

var knex = require('knex')({
    client: 'pg',
    connection: settings
});

module.exports = {knex}