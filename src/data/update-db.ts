import { pool } from "./connect_db";

async function updateData(data: string, id: number) {
  try {
    const update = "UPDATE lingo_info SET english_rank = ? WHERE id = ?";
    await pool.query(update, [data, id]);
  } catch (error) {
    console.log("xato update-db:", error);
  }
}

export { updateData };
