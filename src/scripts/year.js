const MONTHS = [
  { "month": "January",
    "content": "Following the viral moment of Bernie Sanders sporting knitted gloves at the U.S. 2021 presidential inauguration, mittens were searched more than ever before worldwide.",
    "image": "bernie",
  },
  {
    "month": "February",
    "content": "Blackouts across the globe caused searches for power outage to increase 5,000% worldwide in February.",
    "image": "none",
  },
  {
    "month": "March",
    "content": "As BTS and many other K-pop idols incorporated sign language into their choreography, the world searched love you in sign language more than ever before this year. 🤟",
    "image": "bts",
  },
  {
    "month": "April",
    "content": "This March, the world was captivated by the Meghan and Harry interview with Oprah, making it the most searched interview in Google Trends history.",
    "image": "harry_meghan",
  },
  {
    "month": "May",
    "content": "The world wanted to show up for its nurses. when is nurses week was searched at an all-time high in 2021 around the globe.",
    "image": "none",
  },
  {
    "month": "June",
    "content": "We’re going to the moon! U.S. search interest for what is a meme stock was 10X higher in 2021 compared to the previous year.",
    "image": "stock",
  },
  {
    "month": "July",
    "content": "Global where can i travel searches were 3X higher in 2021 compared to pre-pandemic levels.",
    "image": "",
  },
  {
    "month": "August",
    "content": "Search interest for when can i get a covid booster increased 10X from July to August globally.",
    "image": "covid",
  },
  {
    "month": "September",
    "content": "Search interest for job interview in the U.S. surpassed pre-pandemic levels in September 2021.",
    "image": "",
  },
  {
    "month": "October",
    "content": "Due to global outages across several social media platforms, down today searches reached an all-time high in 2021 worldwide.",
    "image": "none",
  },
  {
    "month": "November",
    "content": "This November, small business saturday near me was a global breakout search.",
    "image": "small_business",
  },
  {
    "month": "December",
    "content": "Globally, omicron symptoms was searched 9X more than cold symptoms this December.",
    "image": "omicron",
  },
];


export default class Year {
  constructor() {
    this.createGrid();
    this.randColor();
  }
  
  createGrid() {
    const yearContainer = document.getElementById("year-container");
    
    for (let i in MONTHS) {
      const month = Object.values(MONTHS[i])[0].slice(0,3);
      const content = Object.values(MONTHS[i])[1];
      const img = Object.values(MONTHS[i])[2];
      const imgUrl = `url(src/images/${img}.jpg)`;

      const monthDiv = document.createElement("div");
      const monthInner = document.createElement("div");
      const monthFront = document.createElement("div");
      const monthBack = document.createElement("div");
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

      if (img) {
        monthBack.style.background = `
          ${imgUrl} no-repeat fixed center top
        `;
        para.style.color = "#2c394f";
      }
    }
  }

  randColor() {
    const yearContainer = document.getElementById("year-container");
    const children = Array.from(yearContainer.children);
    const randomCell = Math.floor(Math.random() * MONTHS.length);

    const cells = [
      {
      "cell": randomCell,
      "color": "#F4B400",
      },
      {
      "cell": (randomCell + 5) % 12,
      "color": "#DB4437",
      },
      {
      "cell": (randomCell + 10) % 12,
      "color": "#0F9D58",
      },
    ];

    for (let i in cells) {
      let cell = Object.values(cells[i])[0];
      let color = Object.values(cells[i])[1];
      
      const inner = children[cell].querySelector(".month-inner");
      const front = Array.from(inner.children)[0];
      front.style.backgroundColor = color;
    }
  }
}