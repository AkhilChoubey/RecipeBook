const knex = require('knex')({
    client: 'mysql',
    port: process.env.MYSQL_ADDON_PORT,
    connection: {
      host :  'bz8gpu5jgvbjqlg1yvio-mysql.services.clever-cloud.com',// process.env.MYSQL_ADDON_HOST,
      user :   "uxajjrg7gc78343d",//process.env.MYSQL_ADDON_USER,
      password : "njZocbMsQTbcqQY5qGtu" ,//process.env.MYSQL_ADDON_PASSWORD,
      database :  "bz8gpu5jgvbjqlg1yvio",//process.env.MYSQL_ADDON_DB,
     // socketPath :   //process.env.MYSQL_ADDON_URI
    },
    pool: { min: 0, max: 50 },
});

module.exports = knex;


// DB_HOST="localhost"
// DB_USER="root"
// DB_PASS="634@Akhil"
// DB_NAME="userDetail"