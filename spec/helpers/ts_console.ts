// tslint:disable-next-line:no-var-requires
//http://bisaga.com/blog/programming/testing-typescript-node-app-with-jasmine/
//https://www.npmjs.com/package/jasmine-ts-console-reporter
const TSConsoleReporter = require("jasmine-ts-console-reporter");

jasmine.getEnv().clearReporters(); // Clear default console reporter
jasmine.getEnv().addReporter(new TSConsoleReporter());
