const { Pool } = require('pg');
const inquirer = require('inquirer');

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

//viewDepartments();

//Creating the inquirer prompts menu
function employeeManager() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'employeeActions',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role' , 'View All Departments', 'Add Departments']
      }
    ])
    .then((choice) =>  {
      switch(choice.employeeActions) {
        case 'View All Employees':
        //function;
           break;
        case 'Add Employee':
          //function;
          break;
        case 'Update Employee Role':
            //function;
            break;
        case 'View All Roles':
              //function;
              break;
        case 'Add Role':
            //function;
            break;
        case 'View All Departments':
            //function;
            break;
        case 'Add Departments':
            //function;
            break;
      }
     
    })
}

//Call the manager to start
employeeManager();