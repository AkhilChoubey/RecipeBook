const knex = require('knex')({
    client: 'mysql',
    port: '3306',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_NAME,
    },
    pool: { min: 0, max: 50 },
});

module.exports = knex;


// DB_HOST="localhost"
// DB_USER="root"
// DB_PASS="634@Akhil"
// DB_NAME="userDetail"