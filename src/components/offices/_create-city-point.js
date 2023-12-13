export function createCityPoint(region) {
  const cityPoint = document.createElement('div');
  cityPoint.classList.add('offices__city-point');
  cityPoint.style = `top: ${region.coordinates[0]}px; left: ${
    region.coordinates[1] + 30
  }px;`;

  const cityName = document.createElement('span');
  cityName.classList.add(
    'offices__city-point-name',
    `offices__city-point-name_${region.size}`
  );
  cityName.textContent = region.cityShortName
    ? region.cityShortName
    : region.city;
  cityPoint.appendChild(cityName);

  return cityPoint;
}
