export function addDropdownRegionCities(dropDownRegionName, regionCity) {
  const cityName = document.createElement('span');
  cityName.classList.add('offices__dropdown-city');
  cityName.textContent = regionCity;
  dropDownRegionName
    .closest('.offices__dropdown-region')
    .querySelector('.offices__dropdown-cities')
    .appendChild(cityName);
}
