const root = document.documentElement;

const WHITE = '#e9ecef';
const BLACK = '#111111';
const SHADOW_WHITE = '#ffffff6b';
const SHADOW_BLACK = '#0000006b';
const LINE_WHITE = '#cdd4db';
const LINE_BLACK = '#282828';

/**
 * Function to set the dark theme.
 */
function darkMode() {
  root.style.setProperty('--white', BLACK);
  root.style.setProperty('--black', WHITE);
  root.style.setProperty('--shadow-black', SHADOW_WHITE);
  root.style.setProperty('--line', LINE_BLACK);
}

/**
 * Function to set the ligh theme.
 */
function lightMode() {
  root.style.setProperty('--black', BLACK);
  root.style.setProperty('--white', WHITE);
  root.style.setProperty('--shadow-black', SHADOW_BLACK);
  root.style.setProperty('--line', LINE_WHITE);
}

/**
 * Function to save the theme in the local storage.
 * @param {string} theme - The theme to save.
 */
function saveTheme(theme) {
  localStorage.setItem('theme', theme);
}

/**
 * Function to set the theme when the page is loaded.
 */
function loadTheme() {
  if (localStorage.length === 0) {
    saveTheme('light');
  }

  if (localStorage.getItem('theme') === 'dark') darkMode();
  if (localStorage.getItem('theme') === 'light') lightMode();
}

/**
 * Function to get the theme from the local storage.
 * @returns {string} - The current theme.
 */
function getTheme() {
  return localStorage.getItem('theme');
}

/**
 * Function to toggle the theme.
 */
function toggleTheme() {
  if (root.style.getPropertyValue('--black') === BLACK) {
    darkMode();
    saveTheme('dark');
    return;
  }

  lightMode();
  saveTheme('light');
}

export { loadTheme, toggleTheme, getTheme };
