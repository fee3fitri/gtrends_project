import Map from "./scripts/map"
import Trends from "./scripts/trends"
import Slider from "./scripts/slider"

document.addEventListener("DOMContentLoaded", () => {
  const mapContainer = document.getElementById("regions_div");
  const map = new Map();
  const trends = new Trends();
  const slider = new Slider();
});