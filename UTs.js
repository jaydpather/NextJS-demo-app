var Jasmine = require('jasmine');
var jasmine = new Jasmine();

//module.exports = require('./server.js')

jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.configureDefaultReporter({
    showColors: false
});
jasmine.execute();