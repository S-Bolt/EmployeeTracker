const { Pool } = require('pg');

//connect to database
const pool = new Pool ({
    host:'localhost',
    user:'postgres',
    database:'employees_db',
    Password:'postgres',
    port:5432
},
console.log('Connected to empoyees_db')
)