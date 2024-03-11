import { pool } from "./connect_db";
import { Context } from "grammy";

async function getUsers(id:Number) {
  try {
    const [rows] = await pool.query(`select * from user_info where id = ${id}`);
    return rows;
    
  } catch (err) {
    console.log("get Users:" + err);
  }
}


export { getUsers };