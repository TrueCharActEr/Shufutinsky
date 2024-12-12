testConfig = [];

const Calendar = require('shufutinsky');

const calendar = new Calendar();

console.log("Текущая дата:", calendar.getCurrentDate());

calendar.addDays(10);
console.log("Дата через 10 дней:", calendar.getCurrentDate());

console.log("Форматированная дата:", calendar.format('dd.MM.yyyy'));
