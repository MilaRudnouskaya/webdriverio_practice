var cart = require('./cart.page.js');

describe("Cart functionality", function () {

  var btn = "#buyNowButton"
  var qty = "#qty"

  beforeEach(function () {
	    browser.url("/product-page.html");
	});

	it("should only let you buy after setting a quantity", function () {

	  	var isBtnEnabled = cart.btn.isEnabled();
	  	expect(isBtnEnabled, "buy now should be disabled by default").to.be.false;

	  	cart.qty.setValue(10);

	  	isBtnEnabled = cart.btn.isEnabled();
	  	expect(isBtnEnabled, "buy now should be disabled by default").to.be.true;
	 });

  	describe("Checkout process", function () {
  		beforeEach(function () {
    		browser.setValue(qty, 10);
    		browser.click(btn);
  		});

  		it("should disbale buy now button during processing", function(){
  			var isBtnEnabled = browser.isEnabled(btn);
  			expect(isBtnEnabled, "buy now should be disabled after clicking").to.be.false;

  			var btnText = browser.getText(btn);
  			expect(btnText, "Verify text has changed").to.contain("Purchasing");
  		});

  		it("should show a thank you message with qty and type", function(){
  			//partial text match selector
  			var thankYou = ".callout*=Thank you human";

  			browser.waitForExist(thankYou, 3000);

  			//verify the message has qty

  			var thankText = browser.getText(thankYou);
  			expect(thankText).to.contain("10");
  		}); 

  		it("should clear input after completion", function(){
  			browser.waitForValue(qty, 3000, true);
  		});

  		it("should reset button text after purchase comppletes", function(){

  			browser.waitUntil(function(){
  				
  				return browser.getText(btn) !== "Purchasing...";
  			}, 3000);

  			var btnText = browser.getText(btn);

  			expect(btnText).to.equal('Buy Now');
  		
  		});

  		it("should hide thank you message after clicking close button", function(){
  			var thankYou = $(".callout*=Thank you human");

  			thankYou.waitForExist;
  			$(".close-button").click;
  			thankYou.waitForVisible(null, true);


  		});
  	});

});