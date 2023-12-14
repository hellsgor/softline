import CyrillicToTranslit from 'cyrillic-to-translit-js';

export function createCityPoint(region) {
  const cyrillicToTranslit = new CyrillicToTranslit();
  const sizeCorrection =
    document.documentElement.scrollWidth <= 720
      ? 0.72
      : document.documentElement.scrollWidth <= 1200
      ? 0.97
      : 1;
  const positionCorrectionX =
    document.documentElement.scrollWidth <= 375 ? 8 : 0;
  const positionCorrectionY =
    document.documentElement.scrollWidth <= 375 ? -1 : 0;
  const cityPoint = document.createElement('div');

  cityPoint.classList.add('offices__city-point');
  cityPoint.style = `top: ${
    region.coordinates[0] * sizeCorrection + positionCorrectionY
  }px; left: ${
    region.coordinates[1] * sizeCorrection + positionCorrectionX
  }px;`;

  const cityName = document.createElement('span');
  cityName.classList.add(
    'offices__city-point-name',
    `offices__city-point-name_${region.size}`
  );
  cityName.textContent = region.cityShortName
    ? region.cityShortName
    : region.city;
  cityName.dataset.pointName = cyrillicToTranslit
    .transform(region.city)
    .toLowerCase();
  cityPoint.appendChild(cityName);

  return cityPoint;
}

// 139 / 113
