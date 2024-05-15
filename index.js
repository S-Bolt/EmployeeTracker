const { Pool } = require('pg');


// Connect to database
const pool = new Pool(
  {
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'employees_db'
  },
  console.log(`Connected to the movies_db database.`)
);

function viewDepartments() {
    const sql = `SELECT * FROM departments`;
  
    pool.query(sql, (err, rows) => {
      console.log(rows);
    }); 
}

viewDepartments();