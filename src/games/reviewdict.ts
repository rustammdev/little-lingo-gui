import { Context } from "grammy";
import { getUserRank } from "../data/get-user";
import { RowDataPacket } from "mysql2";

export const ReviewDictionaryGame = async (ctx: Context) => {
  const id = ctx.from?.id;
  const rows = await getUserRank(Number(id));
  const userRank = (rows as RowDataPacket[])[0].english_rank

  console.log(userRank);
  
};
