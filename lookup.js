const db = require('./db');
const name = process.argv[2];

function findUser(done) {
    db.connect((error, client) => {
        client.query("SELECT * FROM famous_people WHERE last_name = $1::text OR first_name = $1::text", [name], (err, result) =>{
            done(result.rows);
            client.end();
        });
    });
}

findUser((results) => {
        console.log(`Searching...\nFound ${results.length} by the name ${name}`);
        results.forEach(function(value) {
        console.log(value.id, value.first_name, value.last_name, value.birthdate);
    });
});