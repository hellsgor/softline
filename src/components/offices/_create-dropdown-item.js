export function createDropdownItem(regionName) {
  const dropDownItemName = document.createElement('span');
  dropDownItemName.classList.add('offices__dropdown-region-name');
  dropDownItemName.textContent = regionName;

  const dropDownItemCities = document.createElement('div');
  dropDownItemCities.classList.add('offices__dropdown-cities');

  const dropDownItem = document.createElement('div');
  dropDownItem.classList.add('offices__dropdown-region');
  dropDownItem.appendChild(dropDownItemName);
  dropDownItem.appendChild(dropDownItemCities);
  return dropDownItem;
}
