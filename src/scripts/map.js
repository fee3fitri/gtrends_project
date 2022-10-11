const COUNTRIES = [
  {"United States": {
    'trends': 'Broncos', 
    'volume': 1000000
  }},
  {"Canada": {
    'trends': 'Omonia vs Man United', 
    'volume': 100000
  }},
  {"United Kingdom": {
    'trends': 'Arsenal vs bodø/glimt', 
    'volume': 500000
  }},
  {"Ireland": {
    'trends': 'Arsenal vs bodø/glimt', 
    'volume': 20000
  }},
  {"South Africa": {
    'trends': 'Arsenal vs bodø/glimt', 
    'volume': 100000
  }},
  {"Nigeria": {'trends': 'Chelsea vs Milan', 
    'volume': 200000
  }},
  {"India": {
    'trends': 'Cricket Live', 
    'volume': 1000000
  }},
  {"Singapore": 
    {'trends': 'Real Madrid', 
    'volume': 20000
  }},
  {"Australia": {
    'trends': 'Omonia vs Man United', 
    'volume': 100000
  }},
  {"New Zealand": {
    'trends': 'Omonia vs Man United', 
    'volume': 20000
  }},
  {"Brazil": 
    {'trends': 'Alexandre de Moraes', 
    'volume': 200000},
  },
  {"Russia": {
    'trends': 'Паша Техник', 
    'volume': 100000
  }},
  {"Indonesia": {
    'trends': 'Maulid Nabi 2022', 
    'volume': 200000
  }},
  {"Austria": {
    'trends': 'Mostafa El-Abbadi', 'volume': 200000
  }},
  {"Colombia": {
    'trends': 'Manchester United', 
    'volume': 100000
  }},
  {"Norway": {
    'trends': 'Manchester United', 
    'volume': 100000
  }},
  {"Ukraine": {
    'trends': 'Суровикин', 
    'volume': 10000
  }},
  {"South Korea": {
    'trends': '나폴리', 
    'volume': 10000
  }}
];

export default class Map {
  constructor() {
    this.drawRegionsMap = this.drawRegionsMap.bind(this);
    this.load();
  }

  // Querying the map data from Google Spreadsheet
  drawRegionsMap() {
    const query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1LOD5EAr5K5u45ORZiafyk5k96aI_ByzYk-NkJM0k6do/gviz/tq?gid=0&headers=1&range=A:B'
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
        trendsObj = Object.values((COUNTRIES[row]));
      };

      

      for (let i = 0; i < 5; i++) {
        let trends = Object.values(trendsObj[i])[0];
        let volume = Object.values(trendsObj[i])[1].toString();
        let volStr;

        if (volume > 999999) {
          volStr = `${volume.slice(0, -6)}M+ searches`
        } else if (volume > 999) {
          volStr = `${volume.slice(0, -3)}K+ searches`
        }

        countryBox.innerHTML = country;

        trendBox.innerHTML = `
        <div class="trend-content-wrapper">
          <img src="" class="trend-img"></img>
          <div class="trend-content">
            <h4>${trends}</h4>
            <p>${volStr}</p>
          </div>
        </div>
        <i class="fa-solid fa-chevron-down"></i>`
      }
    }
    
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