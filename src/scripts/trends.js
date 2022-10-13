export default class Trends {
  constructor() {
    this.currentDate = document.getElementById("current-date")
    this.today = new Date();
    this.printDate();
  }

  printDate() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
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
      "December"
    ]

    let day = days[this.today.getDay()];
    let month = months[this.today.getMonth()];
    let date = this.today.getDate();
    let year = this.today.getFullYear();

    this.currentDate.innerHTML = `${day}, ${month} ${date}, ${year}`;
  }
}