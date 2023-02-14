# gTrends Project
[gTrends](https://fee3fitri.github.io/gtrends_project/) is an app where user can find the most trending keyword search on Google search. It allows user to interact with the map and find the most searched topic for a particular country. It also shows the search trends for every month in 2021.			

## Key Features
1. Map Section
- User can interact with the map to see the most searched keywords on that day in particular countries.
- Whenever user clicks a particular country on the map, the current date and the most searched topic box will appear. The content will change according to the data for that particular country.
2. 2021 Monthly Card Section
- User can interact on each card to reveal its monthly trends.
3. Navigation
- User can swipe left/right or clicking the bullet navigation at the bottom of the page to go to different pages

## App Interface
![image](https://user-images.githubusercontent.com/110148438/195704698-35d69ef9-04d1-4b20-9956-524adb80621f.png)
![image](https://user-images.githubusercontent.com/110148438/195704497-612749c6-02fb-4b71-9771-eb4bc4d422e4.png)
![image](https://user-images.githubusercontent.com/110148438/195704606-1bd87467-c2c3-4a80-a9cc-04928689d9ff.png)

## Technologies, Libraries, APIs
-	GeoChart API to render world map
- Google spreadsheet to store the data 
- Webpack and Babel to bundle and transpile the source JavaScript code
- npm to manage project dependencies
- Swiper.js give multi-page app effect by sliding each section of the app
- Vanilla JavaScript
- HTML5
-	CSS3

## Bonus Features
- Welcome animation
- Bullet navigation 
- The page is reloaded whenever user goes to the first slide without refreshing the page
- Semi responsive page (only works for landscape orientation)

## Code Sample
### Querying Map from Extrnal Google Sheets
```javascript
drawRegionsMap() {
    const query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1LOD5EAr5K5u45ORZiafyk5k96aI_ByzYk-NkJM0k6do/gviz/tq?gid=0&headers=1&range=A:B'
      );
    query.send(this.handleQueryResponse);
  }
```

### Creating and customizing the map based on spreadsheet data and map options
```javascript
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
      backgroundColor: '',
      tooltip: {isHtml: true}
    }
```
