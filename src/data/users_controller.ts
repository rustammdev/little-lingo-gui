import { pool } from "./connect_db";

export async function main(id: number) {
  try {
    const result = Array(
      await pool.query(`select 1 from user_info where id = ${id}`)
    );
    return result[0][0];
  } catch (err) {
    console.log(err);
  } finally {
    pool.end();
  }
}
