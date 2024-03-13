import { InlineKeyboard, Keyboard } from "grammy";
export const inlineKeyboardLevel = new InlineKeyboard()
  .text("Foundation A1-pre", "A1-pre")
  .text("Elementary A1", "A1")
  .row()
  .text("Pre Intermediate A2", "A2")
  .text("Intermediate B1", "B1")
  .row()
  .text("Upper Intermediate B2", "B2")
  .text("Advanced C1", "C1")
  .row()
  .text("Proficiency C2", "C2");

// After English rank keyboar 
export const startButton = new InlineKeyboard()
  .text("Darsni boshlash", "dars-start")
  .url("Yo'riqnoma", "https://www.google.com")
  .row()
  .text("Ortga qaytish", "back-to-level");

// Default start list
export const startLessonMenu = new InlineKeyboard()
  .text("Mening statistikam", "my-stats")
  .text("Top foydalanuvchilar", "leader-board")
  .row()
  .text("Mening lug'atlarim", "my-dict")
  .text("Sozlamalar", "setting")
  .row()
  .text("All games", "to-games");

// Games list
export const games = new InlineKeyboard()
  .text("Review Dictionary", "review-dict")
  .text("Flashcard", "card")
  .row()
  .text("Quiz", "quiz")
