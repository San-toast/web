const Pool = require("pg").Pool;

const creds = new Pool({
  host: "localhost",
  port: 5432,
  database: "example1",
  user: "postgres",
  password: "5505",
});

module.exports = creds;
