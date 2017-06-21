const {knex} = require('./knexdb');
const myArgs = process.argv.slice(2);

knex.insert({ first_name: myArgs[0], last_name: myArgs[1], birthdate: myArgs[2] }).into("famous_people").asCallback((err,result) => {
    if(err) {
        console.log("error", err);
    }
    console.log(`Success! Added ${myArgs[0]} ${myArgs[1]} born on ${myArgs[2]}`);
    knex.destroy();
})