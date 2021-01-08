const {createElement: $} = require('react');
const path = require('path');
const {readFile} = require('fs').promises;
const {pipeToNodeWritable} = require('react-server-dom-webpack/writer');
const waitForWebpack = require('./waitForWebpack.server');
const bundle = path.resolve(__dirname, '../build/react-client-manifest.json');

module.exports = async function renderReact(Component, res, props) {
  await waitForWebpack();
  const manifest = await readFile(bundle, 'utf8');
  const moduleMap = JSON.parse(manifest);
  pipeToNodeWritable($(Component, props), res, moduleMap);
};
