const MONTHS = [
  { "month": "January",
    "content": "Following the viral moment of Bernie Sanders sporting knitted gloves at the U.S. 2021 presidential inauguration, mittens were searched more than ever before worldwide.",
    "image": "bernie",
  },
  {
    "month": "February",
    "content": "Blackouts across the globe caused searches for power outage to increase 5,000% worldwide in February.",
    "image": "",
  },
  {
    "month": "March",
    "content": "As BTS and many other K-pop idols incorporated sign language into their choreography, the world searched love you in sign language more than ever before this year. 🤟",
    "image": "bts",
  },
  {
    "month": "April",
    "content": "This March, the world was captivated by the Meghan and Harry interview with Oprah, making it the most searched interview in Google Trends history.",
    "image": "",
  },
  {
    "month": "May",
    "content": "The world wanted to show up for its nurses. when is nurses week was searched at an all-time high in 2021 around the globe.",
    "image": "",
  },
  {
    "month": "June",
    "content": "We’re going to the moon! U.S. search interest for what is a meme stock was 10X higher in 2021 compared to the previous year.",
    "image": "",
  },
  {
    "month": "July",
    "content": "Global where can i travel searches were 3X higher in 2021 compared to pre-pandemic levels.",
    "image": "",
  },
  {
    "month": "August",
    "content": "Search interest for when can i get a covid booster increased 10X from July to August globally.",
    "image": "",
  },
  {
    "month": "September",
    "content": "Search interest for job interview in the U.S. surpassed pre-pandemic levels in September 2021.",
    "image": "",
  },
  {
    "month": "October",
    "content": "Couldn’t refresh the feed? Due to global outages across several social media platforms, down today searches reached an all-time high in 2021 worldwide.",
    "image": "",
  },
  {
    "month": "November",
    "content": "This November, small business saturday near me was a global breakout search.",
    "image": "",
  },
  {
    "month": "December",
    "content": "Globally, omicron symptoms was searched 9X more than cold symptoms this December.",
    "image": "",
  },
];


export default class Year {
  constructor() {
    this.createGrid();
  }
  
  createGrid() {
    const yearContainer = document.getElementById("year-container");
    
    for (let i in MONTHS) {
      const month = Object.values(MONTHS[i])[0].slice(0,3);
      const content = Object.values(MONTHS[i])[1];
      const img = Object.values(MONTHS[i])[2];
      const imgUrl = `url(src/images/${img}.jpg)`

      const monthDiv = document.createElement("div")
      const monthInner = document.createElement("div")
      const monthFront = document.createElement("div")
      const monthBack = document.createElement("div")
      const h3 = document.createElement("h3");
      const para = document.createElement("p");
      
      monthDiv.classList.add("month");
      monthInner.classList.add("month-inner");
      monthFront.classList.add("month-front");
      monthBack.classList.add("month-back");

      h3.innerText = month;
      para.innerText = content;

      yearContainer.appendChild(monthDiv);
      monthDiv.appendChild(monthInner);
      monthInner.append(monthFront, monthBack);
      monthFront.appendChild(h3);
      monthBack.appendChild(para);

      if (img !== '') {
        monthBack.style.background = `
          ${imgUrl} no-repeat fixed center top`;
      }
    }
  }
}