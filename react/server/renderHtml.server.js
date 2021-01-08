const path = require('path');
const {readFile} = require('fs').promises;
const waitForWebpack = require('./waitForWebpack.server');

const indexHtml = path.resolve(__dirname, '../build/index.html');

module.exports = async function renderReact() {
  await waitForWebpack();
  return await readFile(indexHtml, 'utf8');
};
