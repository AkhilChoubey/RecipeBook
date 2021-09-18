const express = require("express");
const dotenv = require("dotenv");
//Load env vars
dotenv.config({ path: "./config/config.env" });

//const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const override = require('./override');
const cors = require("cors");
const errorHandler = require("./utils/errorHandler");

const app = express();

const knex = require('knex')({
  client: 'mysql',
  
  connection: {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
  },
  pool: { min: 0, max: 50 },
});

knex.connect();


app.use(cors({origin: 'https://akhilrecipeapp.netlify.app/'}));





app.use(cors());

app.use(override.overrideContentType());
app.use(express.json({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(cookieParser());
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

require("./routes/index")(app);
app.use(errorHandler.errorHandler);

const PORT = process.env.PORT || 4000;
const server = app.listen(
  PORT,
  console.log(`Server running in mode on port ${process.env.PORT}`)
);

// Handle Unhandled Rejection
process.on("unhandledRejection", (error, promise) => {
  console.log(`Unhandled Rejection Error: ${error.message}`);
  server.close(() => process.exit(1));
});
