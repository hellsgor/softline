import {offices} from 'Mocs/offices';
import {createCityPoint} from 'Components/offices/_create-city-point';

export function changeRegion(regionTab, regionTabs, map) {
  if (!regionTab.classList.contains('button_active-tab')) {
    regionTabs.forEach((tab) => {
      tab.classList.remove('button_active-tab');
    });

    regionTab.classList.add('button_active-tab');
    map.innerHTML = '';

    if (regionTab.textContent === 'Все') {
      offices.forEach((office) => {
        map.appendChild(createCityPoint(office));
      });
    } else {
      offices
        .filter((office) => office.region === regionTab.textContent)
        .forEach((office) => {
          map.appendChild(createCityPoint(office));
        });
    }
  }
}
