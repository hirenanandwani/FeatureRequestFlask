exports.config = {
  
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
        'args': ['--disable-web-security',  'disable-extensions', 'start-maximized', 'lang=en-EN', '--enable-single-click-autofill', '--dom-automation', '--enable-automation', '--headless', 'no-sandbox'],

        prefs: {
            'credentials_enable_service': false,
            'password_manager_enabled': false,
        }
    }
    /*'chromeOptions': {
    'args': ['show-fps-counter=true']
    }*/
  },

  chromeOnly: true,

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['mytest.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 300000
  }
};
