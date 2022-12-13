const COUNTRIES = [
  {"United States": {
    'trends': 'Chris Beard', 
    'volume': 200000,
    'src': 'chris_beard',
    'video': 'Cn-LOUDt5HM',
  }},
  {"Canada": {
    'trends': 'Omonia vs Man United', 
    'volume': 100000,
    'src': 'omonia_vs_man_united',
    'video': 'csaTKju1PkA',
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
    'trends': 'Maria Telkes', 
    'volume': 1000000,
    'src': 'maria_telkes',
    'video': 'FX5aPfji3Lk',
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
    'video': 'csaTKju1PkA',
  }},
  {"New Zealand": {
    'trends': 'Omonia vs Man United', 
    'volume': 20000,
    'src': 'omonia_vs_man_united',
    'video': 'csaTKju1PkA',
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
    'video': 'oPWhTg5RDhc',
  }},
  {"South Korea": {
    'trends': '나폴리', 
    'volume': 10000,
    'src': 'naples',
    'video': 'mRUxcZ_K1eU',
  }},
  {"Belarus": {
    'trends': 'Торговый центр в Балашихе. Пожар', 
    'volume': 5000,
    'src': 'fire',
    'video': 'ObBhwPKG-wY',
  }},
  {"Turkmenistan": {
    'trends': 'Çağrı Bey', 
    'volume': 5000,
    'src': 'cagri_bey',
    'video': 'RfCbxLE1xCU',
  }},
  {"Sudan": {
    'trends': 'Najib Balala', 
    'volume': 5000,
    'src': 'najib_balala',
    'video': 'QM_RwSfjcBs',
  }},
  {"Tanzania": {
    'trends': 'Najib Balala', 
    'volume': 5000,
    'src': 'najib_balala',
    'video': 'QM_RwSfjcBs',
  }},
  {"Congo": {
    'trends': '', 
    'volume': 5000,
    'src': '',
    'video': '',
  }},
  {"Ethiopia": {
    'trends': 'Mateu Lahoz', 
    'volume': 5000,
    'src': 'mateu _lahoz',
    'video': 'dwm28okfceA',
  }},
  {"Germany": {
    'trends': 'Wolfgang Schäuble', 
    'volume': 5000,
    'src': 'wolfgang_schäuble',
    'video': '2HEc_rJQKCQ',
  }},
  {"Azerbaijan": {
    'trends': 'Çağrı Bey', 
    'volume': 5000,
    'src': 'cagri_bey',
    'video': 'RfCbxLE1xCU',
  }},
  {"China": {
    'trends': '流行病', 
    'volume': 5000,
    'src': 'pandemic',
    'video': 'pACGrFZycmY',
  }},
  {"Congo": {
    'trends': 'Mateu Lahoz', 
    'volume': 5000,
    'src': 'mateu _lahoz',
    'video': 'dwm28okfceA',
  }},
  {"Argentina": {
    'trends': 'Argentina vs Croacia', 
    'volume': 200000,
    'src': 'arg_cro',
    'video': 'yP3ywBoTNG4',
  }},
  {"United Arab Emirates": {
    'trends': '2022 كأس العالم قطر', 
    'volume': 100000,
    'src': 'world_cup',
    'video': 'nzM2FUu78qA',
  }},
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
        <i class="fa-solid fa-chevron-down rotate" id="arrow"></i>
        `;

        player.setAttribute("src", `https://www.youtube.com/embed/${video}`)
      }
    }
    
    chart.draw(data, options);
    google.visualization.events.addListener(chart, 'select', clickHandler);
  }

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
    }.bind(relatedVideo));
  }
}