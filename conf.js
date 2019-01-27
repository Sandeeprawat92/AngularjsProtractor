exports.config = {

	// connect without opening webdriver server
	directConnect : true,

	// Capabilities to be passed to the webdriver instance.
	capabilities : {
		'browserName' : 'chrome'
	},

	// seleniumAddress : 'http://localhost:4444/wd/hub',

	specs : [ 'FirstTest.js' ]
	
	// Options to be passed to Jasmine. 
	 /* jasmineNodeOpts: {
	    defaultTimeoutInterval: 30000
	  }*/
};