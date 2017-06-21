const {knex} = require('./knexdb');
const name = process.argv[2];

knex.select().from("famous_people").where("first_name", name).orWhere("last_name", name).asCallback((error, results) => {
    if (error) {
        return console.log("Connection Error", error);
    }
    console.log(`Searching...\nFound ${results.length} by the name ${name}`)
    results.forEach((value) => {
        console.log(value.id, value.first_name, value.last_name, value.birthdate);
    })
    knex.destroy();
});