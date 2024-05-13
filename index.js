const { Pool } = require('pg');

//connect to database
const pool = new Pool ({
    host:'localhose',
    user:'postgres',
    database:'employees_db',
    Password:'Testing123#@!',
    port:5432
},
console.log('Connected to empoyees_db')
)