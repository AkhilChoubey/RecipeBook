const knex = require('knex')({
    client: 'mysql',
    port: 3306,
    connection: {
      host : process.env.MYSQL_ADDON_HOST,
      user : process.env.MYSQL_ADDON_USER,
      password : process.env.MYSQL_ADDON_PASSWORD,
      database : process.env.MYSQL_ADDON_DB,
    },
    pool: { min: 0, max: 50 },
});

module.exports = knex;


// DB_HOST="localhost"
// DB_USER="root"
// DB_PASS="634@Akhil"
// DB_NAME="userDetail"