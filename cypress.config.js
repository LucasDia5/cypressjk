const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
     return require('./cypress/plugins/index.js')(on, config)
     require('cypress-mochawesome-reporter/plugin')(on)
        },   
    },
    fixturesFolder: false,

  reporter: 'cypress-multi-reporters',
   reporterOptions: {
   reporterEnabled: 'cypress-mochawesome-reporter',
   cypressMochawesomeReporterReporterOptions:{
   charts:true,
   reportPageTitle: 'Relatório de testes',
   embeddedScreenshots: true,
   inlineAssets: true,
   saveAllAttempts: false
 }
},

})
