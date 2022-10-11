export default class Trends {
  constructor() {
    this.currentDate = document.getElementById("current-date")
    this.today = new Date();
    this.printDate();
    this.getData();
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

  getData() {
    const relatedVideo = document.querySelector("#related-video");
    
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=Broncos&key=AIzaSyA2Qy_FSMydV5MtYLiLsVmTaGI2TGuw_KU")
    .then((videoResult) => {
      return videoResult.json()
    }).then((videoData) => {
      let videos = videoData.items;
      
      for (let video of videos) {
        let title = video.snippet.title;
        relatedVideo.innerHTML = `
          <img src="${video.snippet.thumbnails.medium.url}">
          <p>${title}</p>
        `;
      }
    })
  }
}