import { pool } from "./connect_db";

const updateEnglishLevel = async (level: string) => {};

// const defaultLingoValue = async (ctx: any, id: any) => {
//   try {
//     const defaultValue = `NSERT INTO lingo_info(id, coins, eng_level, rank_position) VALUES (${id}, 0, Started, 0)`;
//     await pool.query(defaultValue);
//   } catch (err) {
//     console.error("Xatolik sodir bo'ldi:", err);
//   } finally {
//     pool.end();
//   }
// };

// export { defaultLingoValue };
