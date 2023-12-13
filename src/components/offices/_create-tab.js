export function createTab(tabText) {
  const newTab = document.createElement('button');
  newTab.type = 'button';
  newTab.classList.add('button', 'button_tab');
  newTab.textContent = tabText;

  return newTab;
}
