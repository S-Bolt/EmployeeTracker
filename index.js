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
  console.log(`Connected to the employees database.`)
);
const dbc = new DBC(pool);

function employeeManager() { 
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'employeeActions',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role','Delete Employee', 'View All Roles', 'Add Role' , 'Delete Role', 'View All Departments', 'Add Departments', 'Delete Department']
      }
    ])
    .then((choice) =>  {
      switch(choice.employeeActions) {
        case 'View All Employees':
           dbc.viewEmployees();
           break;
        case 'Add Employee':
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'first_name',
                message: 'Enter the first name of employee'
              },
              {
                type: 'input',
                name: 'last_name',
                message: 'Enter the last name of employee'
              },
              {
                type: 'input',
                name: 'role_id',
                message: 'Enter the role ID of employee'
              },
              {
                type: 'input',
                name: 'manager_id',
                message: 'Enter the manager ID of employee. If employee is mananager input NULL'
              }
            ]).then((answers) => {
              dbc.addEmployee(answers);
            });
          break;
        case 'Update Employee Role':
            //function;
            break;
        case 'Delete Employee':
           //funtion to delete role
           inquirer
           .prompt([
             {
               type: 'input',
               name: 'employeeID',
               message: 'Enter the employee ID to delete'
             }
           ]).then((answer) => {
             dbc.deleteEmployee(answer.employeeID);
           });
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
                type: 'input',
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
        case 'Update Employee Role':
          //funtion to update role
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'RoleId',
                message: 'Enter the ID of the role you would like to update:'
              },
              {
                type: 'input',
                name: 'newTitle',
                message: 'Enter the new title for this role:'
              },
              {
                type: 'input',
                name: 'newSalary',
                message: 'Enter the new salary for this role:'
              },
              {
                type: 'input',
                name: 'newDepartmentId',
                message: 'Enter the new department Id for this role:'
              }
            ]).then((answers) => {
              dbc.updateEmployeeRole(answers.roleId, answers.newTitle, answers.newSalary, answers.newDepartmentId);
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