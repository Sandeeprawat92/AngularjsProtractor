describe("Check the functionality of ", function() {
	/* Act as a container to your tests */

	it("Testing the input box", function() {

		browser.get("https://angularjs.org/");
		// element(by.model()).sendKeys("Sandeep Rawat");
		element(by.model("todoList.todoText")).sendKeys("Sandeep Rawat");

		element(by.xpath("//h2[contains(text(),'AngularJS')]")).getText().then(
				function(text) {

					console.log("Text present on the website is " + text);
				});
	})

});
