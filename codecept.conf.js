exports.config = {
  output: './_output',
  helpers: {
    Appium: {
      app: 'C:/AppiumAUTO/app-release.apk',
      platform: 'Android',
      desiredCapabilities: {
        appPackage: 'com.qazandoapp',
        appActivity: 'MainActivity',
        platformVersion: '9',
        deviceName: 'Pixel'
      }
    }
  },
  include: {
    I: './steps_file.js',
    homePO: './pages/homePO.js',
    loginPage: './pages/loginPage.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
   // features: './features/*.feature',
  //  steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'ProjetoAppium',
  tests: './Testes/*_tests.js'
  
}