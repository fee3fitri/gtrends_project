const COUNTRIES = [
  {"United States": {
    'trends': 'Broncos', 
    'volume': 1000000,
    'src': 'broncos',
    'video': 'WvMm0kT4Pcs',
  }},
  {"Canada": {
    'trends': 'Omonia vs Man United', 
    'volume': 100000,
    'src': 'omonia_vs_man_united',
    'video': 'umaxyiqjeaQ',
  }},
  {"United Kingdom": {
    'trends': 'Arsenal vs bodø/glimt', 
    'volume': 500000,
    'src': 'arsenal_vs_glimt',
    'video': 'AJWRycvQWts',
  }},
  {"Ireland": {
    'trends': 'Arsenal vs bodø/glimt', 
    'volume': 20000,
    'src': 'arsenal_vs_glimt',
    'video': 'AJWRycvQWts',
  }},
  {"South Africa": {
    'trends': 'Arsenal vs bodø/glimt', 
    'volume': 100000,
    'src': 'arsenal_vs_glimt',
    'video': 'AJWRycvQWts',
  }},
  {"Nigeria": {
    'trends': 'Chelsea vs Milan', 
    'volume': 200000,
    'src': 'chelsea_vs_milan',
    'video': 'mmI0njtDTrU',
  }},
  {"India": {
    'trends': 'Cricket Live', 
    'volume': 1000000,
    'src': 'cricket',
    'video': 'RmnxeOjprL4',
  }},
  {"Singapore": 
    {'trends': 'Real Madrid', 
    'volume': 20000,
    'src': 'real_madrid',
    'video': 'N2x0lWrCtX4',
  }},
  {"Australia": {
    'trends': 'Omonia vs Man United', 
    'volume': 100000,
    'src': 'real_madrid',
    'video': 'VC_SEvkI7sw',
  }},
  {"New Zealand": {
    'trends': 'Omonia vs Man United', 
    'volume': 20000,
    'src': 'omonia_vs_man_united',
    'video': 'VC_SEvkI7sw',
  }},
  {"Brazil": 
    {'trends': 'Alexandre de Moraes', 
    'volume': 200000,
    'src': 'alexandre_de_moraes',
    'video': 'UmjbUXtHCTs',
}},
  {"Russia": {
    'trends': 'Паша Техник', 
    'volume': 100000,
    'src': 'pasha_tehnik',
    'video': 'AlfktCE3T4g',
  }},
  {"Indonesia": {
    'trends': 'Maulid Nabi 2022', 
    'volume': 200000,
    'src': 'maulid_nabi',
    'video': 'LGTopk-UzY8',
  }},
  {"Austria": {
    'trends': 'Mostafa El-Abbadi', 
    'volume': 200000,
    'src': 'mostafa_el-abbadi',
    'video': '-VbL4rQuQ5w',
  }},
  {"Colombia": {
    'trends': 'Manchester United', 
    'volume': 100000,
    'src': 'manchester_united',
    'video': 'SMOjVeA7658',
  }},
  {"Norway": {
    'trends': 'Manchester United', 
    'volume': 100000,
    'src': 'manchester_united',
    'video': 'SMOjVeA7658',
  }},
  {"Ukraine": {
    'trends': 'Суровикин', 
    'volume': 10000,
    'src': 'surobikin',
    'video': 'HdlSzCDz-yg',
  }},
  {"South Korea": {
    'trends': '나폴리', 
    'volume': 10000,
    'src': 'naples',
    'video': 'mRUxcZ_K1eU',
  }}
];


export default class Map {
  constructor() {
    this.drawRegionsMap = this.drawRegionsMap.bind(this);
    this.load();
    this.showVideo();
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
    }

    // What works when clicking the map
    const clickHandler = () => {
      const selection = chart.getSelection();
      const trendsResults = document.querySelector("#trends-results");
      const find = document.querySelector("#find");
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
        let img = Object.values(trendsObj[i])[2];
        let video = Object.values(trendsObj[i])[3];
        let volStr;

        if (volume > 999999) {
          volStr = `${volume.slice(0, -6)}M+`
        } else if (volume > 999) {
          volStr = `${volume.slice(0, -3)}K+`
        }

        countryBox.innerHTML = country;
        trendsResults.style.display = "block";
        find.style.display = "none";

        trendBox.innerHTML = `
        <div class="trend-content-wrapper">
          <img class="trend-img" src="./src/images/${img}.jpg">
          <div class="trend-content">
            <h4>${trends}</h4>
            <p><span id="volume">${volStr}</span> searches</p>
          </div>
        </div>
        <i class="fa-solid fa-chevron-down" id="arrow"></i>`;
        player.setAttribute("src", `http://www.youtube.com/embed/${video}?enablejsapi=1&origin=http://example.com`)
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
  
  showVideo() {
    const relatedVideo = document.querySelector("#related-video");
    const trendsContainer = document.querySelector("#trends-container");
    
    trendsContainer.addEventListener("click", function() {
      if (relatedVideo.style.display === "block") {
        relatedVideo.style.display = "none";
      } else {
        relatedVideo.style.display = "block";
      }
    }.bind(relatedVideo))
  }
}