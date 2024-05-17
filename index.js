const { Pool } = require('pg');
const inquirer = require('inquirer');
const DBC = require('./db/choices');

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

const dbc = new DBC(pool);

//viewDepartments();

//Creating the inquirer prompts menu
function employeeManager() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'employeeActions',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role' , 'Delete Role', 'View All Departments', 'Add Departments', 'Delete Department']
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
              dbc.viewRoles();
              break;
        case 'Add Role':
          // Asking user for the roles information then passing it to addRole method
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'title',
                message: 'Enter the title for new role'
              },
              {
                type: 'imput',
                name: 'salary',
                message: 'Enter the salary for this role'
              },
              {
                type: 'input',
                name: 'departmentID',
                message: 'Enter the depertment ID the this role'
              }
            ]).then((answers) => {

              const { title, salary, departmentID } = answers;

              dbc.addRole({ title, salary, department_id: departmentID});
            });
            break;
        case 'Delete Role':
          //funtion to delete role
          inquirer
          .prompt([
            {
              type: 'input',
              name: 'roleName',
              message: 'Enter the role to delete'
            }
          ]).then((answer) => {
            dbc.deleteRole(answer.roleName);
          });
            break;
        case 'View All Departments':
          //function to view departments
            dbc.viewDepartments();
            break;
        case 'Add Departments':
          //prompt user to name a department to add
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'departmentName',
                message: 'Enter new department name.'
              }
            ]).then((answer) => {
             //function to add new department. Prompt answer is passed to addDepartment method of dbc class.
              dbc.addDepartment(answer.departmentName);
            });
            break; 
        case 'Delete Department':
          //prompt user to pick a department to delte
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'departmentName',
                message: 'Enter the department name to delete'
              }
            ]).then((answer) => {
              dbc.deleteDepartment(answer.departmentName);
            });
          break;  
      }
     
    })
}

//Call the manager to start
employeeManager();