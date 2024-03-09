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

async function main(
  firstNamae: string,
  lastNamae: string,
  username: string,
  link: string,
  coins: number = 0,
  lclass: string = "Starter",
  reytin: number
) {
  try {
    // Ma'lumot qo'shish
    await pool.query(
      `INSERT INTO user_info (user_id, first_name, last_name, nick_name, user_name, coin_counter, lingo_class, lingo_reyting) VALUES (${firstNamae}, ${lastNamae}, ${username}, ${link}, ${coins}, ${lclass}, ${reytin})`
    );

    // Ma'lumotlarni ko'rish
    const userInfo = await pool.query("SELECT * FROM user_info");

    console.log(userInfo[0]);
  } catch (err) {
    console.error("Xatolik sodir bo'ldi:", err);
  } finally {
    pool.end();
  }
}

export { main };
