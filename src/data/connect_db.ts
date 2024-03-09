import mysql from "mysql2";
require("dotenv").config();

const pool = mysql
  .createPool({
    host: `${process.env.DB_HOST_NAME}`,
    user: `${process.env.DB_USER}`,
    database: `${process.env.DB}`,
    password: `${process.env.DB_PASSWORD}`,
  })
  .promise(); // asinxron



export { pool };
