const path = require('path');
const fs = require('fs');
const po2json = require('@avl-vizbox-develop/i18n-tools/dist/po2json').po2json;

const i18nDir = path.resolve(__dirname, '../src/assets/i18n');

if (!fs.existsSync(i18nDir)) {
  fs.mkdirSync(i18nDir);
}

po2json(
  path.resolve(__dirname, '../src/i18n'),
  i18nDir
);
po2json(
  path.resolve(__dirname, '../node_modules/@avl-controls/core/translation'),
  i18nDir
);
po2json(
  path.resolve(__dirname, '../node_modules/@avl-controls/datatable/translation'),
  i18nDir
);
