const {readFile} = require('fs').promises;
const path = require('path');

module.exports = async function waitForWebpack() {
  while (true) {
    try {
      await readFile(path.resolve(__dirname, '../build/index.html'));
      return;
    } catch (err) {
      console.log(
        'Could not find webpack build output. Will retry in a second...'
      );
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
};
