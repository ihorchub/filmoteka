localStorage.setItem('ui-theme', 'light');

document.querySelector('.themetoggle').addEventListener('click', e => {
  e.preventDefault();
  if (localStorage.getItem('settings') === 'dark') {
    localStorage.removeItem('settings');
  } else {
    localStorage.setItem('settings', 'dark');
  }
  addDarkClassToHTML();
});

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('settings') === 'dark') {
      document.querySelector('html').classList.add('dark');
      document.querySelector('.themetoggle span').textContent = 'wb_sunny';
    } else {
      document.querySelector('html').classList.remove('dark');
      document.querySelector('.themetoggle span').textContent = 'dark_mode';
    }
  } catch (err) {}
}

addDarkClassToHTML();
