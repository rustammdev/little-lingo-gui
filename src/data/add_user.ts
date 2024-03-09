import { pool } from "./connect_db";

async function addUserInfo(
  id : any,  
  fullName: string,
  nickName: string = fullName,
  link: string
) {
  try {
    // Ma'lumot qo'shish
    // const info = `INSERT INTO user_info (id, full_name, nick_name, user_name) VALUES (${id}, ${fullName}, ${nickName}, ${link})`
    const info = `INSERT INTO user_info (id, full_name, nick_name, user_name) VALUES (${id}, '${fullName}', '${nickName}', '${link}')`;
    await pool.query(info);

    // Ma'lumotlarni ko'rish
    const userInfo = await pool.query("SELECT * FROM user_info");

    console.log(userInfo[0]);
  } catch (err) {
    console.error("Xatolik sodir bo'ldi:", err);
  } finally {
    pool.end();
  }
}

export { addUserInfo };
