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

  // getData() {
  //   fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=Broncos&key=AIzaSyD0kC72miWGqBjXBdWTmtJqxjVlPeGtptg")
  //   .then((videoResult) => {
  //     return videoResult.json()
  //   }).then((videoData) => {
  //     let videos = videoData.items;
  //     let trendVideoContainer = document.querySelector(".trend-video-container");

  //     for (let video of videos) {
  //       trendVideoContainer.innerHTML = `
  //       <img src="${video.snippet.thumbnails.medium.url}">
  //       <p>${video.snippet.title}</p>`
  //     }
  //   })
  // }

  getData() {
    const find = document.querySelector("#related-video");
    const videos = document.querySelector(".videos");
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f4889e6e8fmsh538e41ff1475413p10a693jsnc3c9db737bd9',
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
      }
    };
    
    fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=5&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null', options)
      .then(response => response.json())
      .then((response) => {
        let results = response.value;

        for (let i in results) {
          const li = document.createElement("LI");
          find.innerHTML = `<p>${results[i].title} ${results[i].url} ${results[i].image}</p>`;
          videos.appendChild(li);
        }
      })
      .catch(err => console.error(err));
  }
}