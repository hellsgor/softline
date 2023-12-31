import {createTab} from 'Components/offices/_create-tab';
import {offices} from 'Mocs/offices';
import {createCityPoint} from 'Components/offices/_create-city-point';
import {createDropdownItem} from 'Components/offices/_create-dropdown-item';
import {showDropdown} from 'Components/offices/_show-dropdown';
import {showBackdrop} from 'Components/offices/_show-backdrop';
import {hideDropdown} from 'Components/offices/_hide-dropdown';
import {addDropdownRegionCities} from 'Components/offices/_add-dropdown-region-cities';
import {changeRegion} from 'Components/offices/_change-region';

const map = document.getElementById('offices-map');
const tabsBlock = document.getElementById('offices-regions');
const dropdown = document.getElementById('offices-dropdown');
const ollRegionsTab = createTab('Все');
const officesSelect = document.getElementById('offices__select');
const backdrop = document.getElementById('offices__backdrop');
const officesSelectArrow = document
  .getElementById('offices__select')
  .querySelector('.offices__select-arrow');

ollRegionsTab.classList.add('button_active-tab');
tabsBlock.appendChild(ollRegionsTab);

offices
  .map((office) => office.region)
  .filter((region, index, self) => self.indexOf(region) === index)
  .forEach((region) => {
    tabsBlock.appendChild(createTab(region));
    dropdown.appendChild(createDropdownItem(region));
  });

offices.forEach((region) => {
  map.appendChild(createCityPoint(region));
  dropdown
    .querySelectorAll('.offices__dropdown-region-name')
    .forEach((dropDownRegionName) => {
      if (
        region.region === dropDownRegionName.textContent &&
        region.city !== 'Москва'
      ) {
        addDropdownRegionCities(dropDownRegionName, region.city);
      }
    });
});

if (document.documentElement.scrollWidth <= 375) {
  map.closest('.offices__map-wrapper').scrollTo(35, 0);
}

backdrop.addEventListener('click', () => {
  hideDropdown(backdrop, dropdown);
  if (officesSelectArrow.classList.contains('offices__select-arrow_rotate'))
    officesSelectArrow.classList.remove('offices__select-arrow_rotate');
});

officesSelect.addEventListener('click', () => {
  if (
    backdrop.classList.contains('visually-hidden') &&
    dropdown.classList.contains('visually-hidden')
  ) {
    officesSelectArrow.classList.add('offices__select-arrow_rotate');
    showBackdrop(backdrop);
    showDropdown(dropdown);
  } else {
    officesSelectArrow.classList.remove('offices__select-arrow_rotate');
    hideDropdown(backdrop, dropdown);
  }
});

const regionTabs = tabsBlock.querySelectorAll('.button_tab');
tabsBlock.querySelectorAll('.button_tab').forEach((regionTab) =>
  regionTab.addEventListener('click', () => {
    changeRegion(regionTab, regionTabs, map);
  })
);
