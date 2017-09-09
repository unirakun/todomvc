/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */
import { jsdom } from 'jsdom'

global.Intl = require('intl')

const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';
global.document = jsdom(documentHTML)
global.window = document.parentWindow

// Fix found on https://github.com/andyearnshaw/Intl.js/issues/256#ref-commit-61c721a
global.Intl.__disableRegExpRestore()

const DATE_TO_USE = new Date('2016')
const _Date = Date
global.Date = jest.fn(() => DATE_TO_USE)
global.Date.UTC = _Date.UTC
global.Date.parse = _Date.parse
global.Date.now = _Date.now

// Make console.error a real failure
console.error = (message) => { // eslint-disable-line no-console
  throw new Error(message)
}
