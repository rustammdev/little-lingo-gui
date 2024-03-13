import { Keyboard } from "grammy";
// json data
const moduls = require("../content/moduls.json");

export const mygamesKeyoards = new Keyboard()
  .resized()
  .text("Review Dictionary")
  .text("Flashcard")
  .row()
  .text("Quiz");



  
