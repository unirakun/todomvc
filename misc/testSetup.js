global.Intl = require('intl')
import {jsdom} from 'jsdom'

const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';
global.document = jsdom(documentHTML);
global.window = document.parentWindow;

global.window.resizeTo = (width, height) => {
  global.window.innerWidth = width || global.window.innerWidth;
  global.window.innerHeight = width || global.window.innerHeight;
  global.window.dispatchEvent(new Event('resize'));
};

// Fix found on https://github.com/andyearnshaw/Intl.js/issues/256#ref-commit-61c721a
global.Intl.__disableRegExpRestore()


// Make console.error a real failure
console.error = (message) => { // eslint-disable-line no-console
  throw new Error(message)
}
