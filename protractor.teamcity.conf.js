// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { config } = require('./protractor.conf');

let teamCityConfig = {
  ...config,
  onPrepare: () => {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.TeamCityReporter());
  }
};

exports.config = teamCityConfig;
