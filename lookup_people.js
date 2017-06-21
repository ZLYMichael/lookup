const pg = require("pg");
const settings = require("./settings");
const name = process.argv[2];

const client = new pg.Client({
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
});

client.connect((err) => {
    if (err) {
        return console.log("Connection Error", err);
    }
    client.query("SELECT * FROM famous_people WHERE last_name = $1::text OR first_name = $1::text", [name], (err, result) => {
        if (err) {
            return console.error("error running query", err);
        }
        console.log(`Searching...\n Found ${result.rows.length} by the name ${name}`);
        result.rows.forEach(function(value) {
            console.log(value.id, value.first_name, value.last_name, value.birthdate);
        });
        client.end();
    });
});