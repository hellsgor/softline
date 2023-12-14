export function hideDropdown(backdrop, dropdown) {
  backdrop.classList.add('offices__backdrop_fade');
  dropdown.classList.add('offices__dropdown_move');
  window.setTimeout(() => {
    backdrop.classList.add('visually-hidden');
    dropdown.classList.add('visually-hidden');
  }, 300);
}
