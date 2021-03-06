const System = require('systemic');
const optional = require('optional');
const { join } = require('path');
const manifest = optional(join(process.cwd(), 'manifest.json')) || {};
const pkg = require(join(process.cwd(), 'package.json'));
const crawler = require('./crawler');

module.exports = new System({ name: 'app' })
  .add('manifest', manifest)
  .add('pkg', pkg)
  .add('crawler', crawler())
  .dependsOn('config', 'logger', 'broker');
