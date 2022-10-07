class Map {
  
}


google.charts.load('current', {
  'packages':['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap () {
  let data = google.visualization.arrayToDataTable([
    ['Country', 'Search volume/day'],
    ['United States', 500000000],
    ['Canada', 200000000],
    ['United Kingdom', 250000000],
    ['Ireland', 5000000],
    ['South Africa', 300000000],
    ['Nigeria', 3000000],
    ['India', 500000000],
    ['Songapore', 10000000],
    ['Australia', 150000000],
    ['New Zealand', 5000000],
    ['Brazil', 450000000],
    ['Russia', 100000000],
    ['China', 250000000],
    ['Indonesia', 425000000]
  ]);

  let options = {
    colorAxis: {colors: ['#b2ccf7', '#2272f5']},
    datalessRegionColor: '#ebf0f7',
    backgroundColor: ''
  };

  let chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}

module.exports = Map;