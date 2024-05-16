class DBC {
    constructor(pool) {
        this.pool = pool;
    }
//Role queries
    viewRoles() {
        const psql = `SELECT * FROM role`;
      
        this.pool.query(psql, (err, results) => {
            if (err) {
                console.error('Error viewing role');
                return;
            }
          console.log(results);
        }); 
    }

    addRole(role) {
        const psql = 'INSERT INTO role (title, salary, departments_id) VALUES ($1, $2, $3)';
        const values = [role.title, role.salary, role.department_id];

        this.pool.query(psql, values, (err, results) =>{
            if (err) {
                console.error('Error adding role');
                return;
            }
            console.log(results);
        });
    }
//Department queries
    viewDepartments() {
        const psql = `SELECT * FROM departments`;
      
        this.pool.query(psql, (err, results) => {
            if (err) {
                console.error('Error viewing Department');
                return;
            }
          console.log(results);
        }); 
    }

    addDepartment(department) {
        const psql = 'INSERT INTO departments (name) VALUES ($1)';
        const values = [department];

        this.pool.query(psql, values, (err, results) =>{
            if (err) {
                console.error('Error adding Department');
                return;
            }
            console.log(results);
        });
    }

    deleteDepartment(department) {
        const psql = 'DELETE FROM departments WHERE name = $1';
        const values = [department];

        this.pool.query(psql, values, (err, results) => {
            if (err){
                console.error ('Error deleting department');
                return;        
         }
         console.log(results);
        });
    }
}
module.exports = DBC;