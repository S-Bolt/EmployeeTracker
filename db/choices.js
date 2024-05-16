class DBC {
    constructor(pool) {
        this.pool = pool;
    }

    viewDepartments() {
        const sql = `SELECT * FROM departments`;
      
        this.pool.query(sql, (err, results) => {
          console.log(results);
        }); 
    }
}
module.exports = DBC;