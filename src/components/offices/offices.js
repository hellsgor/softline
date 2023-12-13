import {createTab} from 'Components/offices/_create-tab';
import {offices} from 'Mocs/offices';
import {createCityPoint} from 'Components/offices/_create-city-point';

const map = document.getElementById('offices-map');
const tabsBlock = document.getElementById('offices-regions');
const ollRegionsTab = createTab('Все');

ollRegionsTab.classList.add('button_active-tab');
tabsBlock.appendChild(ollRegionsTab);

offices
  .map((office) => office.region)
  .filter((region, index, self) => self.indexOf(region) === index)
  .forEach((region) => {
    tabsBlock.appendChild(createTab(region));
  });

offices.forEach((region) => {
  map.appendChild(createCityPoint(region));
});
