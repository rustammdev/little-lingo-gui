import { pool } from "./connect_db";
import { Context } from "grammy";

// get user info
async function getUsers(ctx: Context) {
  try {
    const sql = "select * from user_info where id = ?"
    const id = ctx.from?.id
    const [rows] = await pool.query(sql, [id]);
    return rows;
  } catch (err) {
    console.log("error get Users:" + err);
  }
}


async function getUserRank(id: Number) {
  const getEnglishRank = "SELECT english_rank FROM lingo_info WHERE id = ?"

  const [rows] = await pool.query(getEnglishRank, [id]);
  return rows
}

export { getUsers, getUserRank};
