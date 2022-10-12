import Map from "./scripts/map"
import Trends from "./scripts/trends"
import Slider from "./scripts/slider"
import Year from "./scripts/year"

document.addEventListener("DOMContentLoaded", () => {
  const mapContainer = document.getElementById("regions_div");
  const map = new Map();
  const trends = new Trends();
  const slider = new Slider();
  const year = new Year();
});

