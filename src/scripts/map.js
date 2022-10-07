export default class Map {
  constructor() {
    this.drawRegionsMap = this.drawRegionsMap.bind(this);
    this.load();
  }

  load() {
    google.charts.load('current', {
      'packages':['geochart'],
    });

    google.charts.setOnLoadCallback(this.drawRegionsMap);
  }

  drawRegionsMap() {
    let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1LOD5EAr5K5u45ORZiafyk5k96aI_ByzYk-NkJM0k6do/gviz/tq?gid=0&headers=1&range=A1:B15'
    );
    query.send(this.handleQueryResponse);
  }

  handleQueryResponse(response) {
    if (response.isError()) {
      alert(`Error in query: ${response.getMessage()} + ${response.getDetailedMessage()}`);
      return;
    }
  
    let data = response.getDataTable();
    let chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
  
    let options = {
      colorAxis: {colors: ['#b2ccf7', '#2272f5']},
      datalessRegionColor: '#ebf0f7',
      backgroundColor: ''
    };
  
    chart.draw(data, options);
  }
}