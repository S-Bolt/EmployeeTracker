const { Pool } = require('pg');

const pool = new Pool ({
  host: "localhost",
  // Your username
  user: "postgres",
  // Your password
  password: "postgres",
  database: "employees"
});

pool.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
