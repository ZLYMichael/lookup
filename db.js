const pg = require('pg');
const settings = require("./settings");

const client = new pg.Client({
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
});


module.exports = {
    connect: (done) => {
        client.connect((error) => {
            done(error, client);
        });
    }
}