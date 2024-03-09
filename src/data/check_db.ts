import { pool } from "./connect_db";

async function checkUser(id: Number) {
  try {
    const info = await pool.query(`select * from user_info where id = ${id}`);
    return info.length > 0 ? true : false;
  } catch (error) {
    console.log("xatolik mavjud:" + error);
  } finally {
    pool.end();
  }
}

export { checkUser };

/* Tekshiruv uchun
 *   const check = await checkUser(Number(id));
 *        if (!check === true) {}
 */
