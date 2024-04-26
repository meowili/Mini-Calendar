const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const currentDate = new Date();

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

date.innerHTML =
  (currentDate.getDate() < 10 ? "0" : "") + currentDate.getDate();
day.innerHTML = weekDays[currentDate.getDay()];
month.innerHTML = months[currentDate.getMonth()];
year.innerHTML = currentDate.getFullYear();
