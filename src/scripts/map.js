const COUNTRIES = [
  {"United States": [
    {'trends': 'Broncos', 'volume': 1000000},
    {'trends': 'Omonia vs Man United', 'volume': 500000},
    {'trends': 'Pixel 7', 'volume': 200000},
    {'trends': 'Mario movie trailer', 'volume': 200000},
    {'trends': 'Arsenal vs bodø/glimt', 'volume': 200000},
]},
  {"Canada": [
    {'trends': 'Omonia vs Man United', 'volume': 100000},
    {'trends': 'UCP leadership race', 'volume': 50000},
    {'trends': 'Pixel 7', 'volume': 50000},
    {'trends': 'Thailand', 'volume': 20000},
    {'trends': 'Arsenal vs bodø/glimt', 'volume': 20000},
  ]},
  {"United Kingdom": [
    {'trends': 'Arsenal vs bodø/glimt', 'volume': 500000},
    {'trends': 'Velma', 'volume': 200000},
    {'trends': 'Anderlecht vs West Ham', 'volume': 100000},
    {'trends': 'Pixel 7', 'volume': 50000},
    {'trends': 'Thailand', 'volume': 50000},
  ]},
  {"Ireland": [
    {'trends': 'Arsenal vs bodø/glimt', 'volume': 20000},
    {'trends': 'Velma', 'volume': 10000},
    {'trends': 'Shamrock Rovers', 'volume': 10000},
    {'trends': 'Irish dancing scandal', 'volume': 5000},
    {'trends': 'Anderlecht vs West Ham', 'volume': 5000},
  ]},
  {"South Africa": [
    {'trends': 'Arsenal vs bodø/glimt', 'volume': 100000},
    {'trends': 'Velma', 'volume': 20000},
    {'trends': 'Roma vs Real Betis', 'volume': 20000},
    {'trends': 'Man Utd', 'volume': 20000},
    {'trends': 'Anderlecht vs West Ham', 'volume': 20000},
  ]},
  {"Nigeria": [
    {'trends': 'Chelsea vs Milan', 'volume': 200000},
    {'trends': 'Roma vs Real Betis', 'volume': 20000},
    {'trends': 'Man United', 'volume': 20000},
    {'trends': 'Anderlecht vs West Ham', 'volume': 10000},
    {'trends': 'Sheriff vs Real Sociedad', 'volume': 10000},
  ]},
  {"India": [
    {'trends': 'Cricket Live', 'volume': 1000000},
    {'trends': 'Man City', 'volume': 100000},
    {'trends': 'Arsenal vs bodø/glimt', 'volume': 100000},
    {'trends': 'Pixel 7', 'volume': 100000},
    {'trends': 'Real Madrid', 'volume': 50000},
  ]},
  {"Singapore": [
    {'trends': 'Real Madrid', 'volume': 20000},
    {'trends': 'Man City', 'volume': 10000},
    {'trends': 'Real Madrid vs Shakhtar Donetsk', 'volume': 10000},
    {'trends': 'Pixel 7', 'volume': 10000},
    {'trends': 'Thailand', 'volume': 10000},
  ]},
  {"Australia": [
    {'trends': 'Omonia vs Man United', 'volume': 100000},
    {'trends': 'Chelsea vs Milan', 'volume': 50000},
    {'trends': 'Powerball Results', 'volume': 50000},
    {'trends': 'Thailand', 'volume': 50000},
    {'trends': 'Benfica vs PSG', 'volume': 50000},
  ]},
  {"New Zealand": [
    {'trends': 'Omonia vs Man United', 'volume': 20000},
    {'trends': 'Arsenal vs bodø/glimt', 'volume': 10000},
    {'trends': 'Thailand', 'volume': 5000},
    {'trends': 'Peter Ellis', 'volume': 2000},
    {'trends': 'Megaland', 'volume': 2000},
  ]},
  {"Brazil": [
    {'trends': 'Alexandre de Moraes', 'volume': 200000},
    {'trends': 'Jogo de Palmeiras', 'volume': 100000},
    {'trends': 'Noruega x Brasil', 'volume': 100000},
    {'trends': 'Fernanda Montenegro', 'volume': 100000},
    {'trends': 'Valencia', 'volume': 100000},
  ]},
  {"Russia": [
    {'trends': 'Паша Техник', 'volume': 100000},
    {'trends': 'Кот', 'volume': 20000},
    {'trends': 'Байден', 'volume': 20000},
    {'trends': 'Мемориал', 'volume': 20000},
    {'trends': 'Никита Пресняков', 'volume': 20000},
  ]},
  {"Indonesia": [
    {'trends': 'Maulid Nabi 2022', 'volume': 200000},
    {'trends': 'Arsenal', 'volume': 50000},
    {'trends': 'Agama Farel Prayoga', 'volume': 50000},
    {'trends': 'Dadang Aremania', 'volume': 50000},
    {'trends': 'BMKG', 'volume': 20000},
  ]}
];

export default class Map {
  constructor() {
    this.drawRegionsMap = this.drawRegionsMap.bind(this);
    this.load();
  }

  // Querying the map data from Google Spreadsheet
  drawRegionsMap() {
    const query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1LOD5EAr5K5u45ORZiafyk5k96aI_ByzYk-NkJM0k6do/gviz/tq?gid=0&headers=1&range=A1:B15'
      );

    query.send(this.handleQueryResponse);
  }

  // Creating and customizing the map based on spreadsheet data and map options
  handleQueryResponse(response) {
    if (response.isError()) {
      alert(`Error in query: ${response.getMessage()} + ${response.getDetailedMessage()}`);
      return;
    }
  
    const data = response.getDataTable();
    const chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    const options = {
      colorAxis: {colors: ['#b2ccf7', '#2272f5']},
      datalessRegionColor: '#ebf0f7',
      backgroundColor: ''
    };

    const clickHandler = () => {
      const selection = chart.getSelection();
      const trendBox = document.querySelector(".trend-box");
      const countryBox = document.querySelector("#country");
      let country, trendsObj;
  
      for (let item of selection) {
        const row = item.row;
        country = data.getValue(row, 0);
        trendsObj = Object.values((COUNTRIES[row]))[0];
      };

      countryBox.innerHTML = country;

      trendBox.innerHTML = `
      <p>${Object.values(trendsObj[0])[0]}</p>
      <p>${Object.values(trendsObj[1])[0]}</p>
      <p>${Object.values(trendsObj[2])[0]}</p>
      <p>${Object.values(trendsObj[3])[0]}</p>
      <p>${Object.values(trendsObj[4])[0]}</p>`
    };
    
    chart.draw(data, options);
    google.visualization.events.addListener(chart, 'select', clickHandler);
  }

  // Show the map when the page is loaded
  load() {
    google.charts.load('current', {
      'packages':['geochart'],
    });

    google.charts.setOnLoadCallback(this.drawRegionsMap);
  }
}