import CyrillicToTranslit from 'cyrillic-to-translit-js';

export function createDropdownItem(regionName) {
  const cyrillicToTranslit = new CyrillicToTranslit();

  const dropDownItemName = document.createElement('span');
  const dropDownItem = document.createElement('div');

  dropDownItemName.classList.add('offices__dropdown-region-name');
  dropDownItemName.textContent = regionName;
  dropDownItemName.dataset.regionName = cyrillicToTranslit
    .transform(regionName)
    .toLowerCase();

  const dropDownItemCities =
    dropDownItemName.dataset.regionName !== 'moskva'
      ? document.createElement('div')
      : null;

  if (dropDownItemCities !== null) {
    dropDownItemName.addEventListener('click', () => {
      document
        .querySelectorAll('.offices__dropdown-cities')
        .forEach((citiesContainer) => {
          if (
            citiesContainer.classList.contains(
              'offices__dropdown-cities_visible'
            ) &&
            citiesContainer.classList.contains(
              'offices__dropdown-cities_flexible'
            )
          ) {
            citiesContainer.classList.remove(
              'offices__dropdown-cities_visible'
            );
            window.setTimeout(() => {
              citiesContainer.classList.remove(
                'offices__dropdown-cities_flexible'
              );
            }, 300);
          }
        });
      if (
        !dropDownItemCities.classList.contains(
          'offices__dropdown-cities_visible'
        ) &&
        !dropDownItemCities.classList.contains(
          'offices__dropdown-cities_flexible'
        )
      ) {
        dropDownItemCities.classList.add('offices__dropdown-cities_flexible');
        window.setTimeout(() => {
          dropDownItemCities.classList.add('offices__dropdown-cities_visible');
        }, 1);
      } else {
        dropDownItemCities.classList.remove('offices__dropdown-cities_visible');
        window.setTimeout(() => {
          dropDownItemCities.classList.remove(
            'offices__dropdown-cities_flexible'
          );
        }, 300);
      }
    });

    dropDownItemCities.classList.add('offices__dropdown-cities');
  }

  dropDownItem.classList.add('offices__dropdown-region');
  dropDownItem.appendChild(dropDownItemName);

  if (dropDownItemCities !== null) {
    dropDownItem.appendChild(dropDownItemCities);
  }

  return dropDownItem;
}
