var reviewForm = require('./reviewform.page.js')


describe("The product review form", function () {
  beforeEach(function () {
    browser.url("/product-page.html");
  });

  it("should add a review when submitted properly", function () {
  	reviewForm.submit("email@example.com", "review");

  	var hasReview = browser.isExisting(".comment=content");

  	//check that review is added
  	expect(hasReview, "comment text exists").to.be.true;
  });

  // it("should show the error message if the input is wrong", function(){

  // 	var isErrorShowing = browser.isVisible("p=Please enter a valid email address.");

  // 	expect(isErrorShowing).to.be.false;

  // 	reviewForm.submit();

  // 	isErrorShowing = browser.isVisible("p=Please enter a valid email address.");

  // 	expect(isErrorShowing).to.be.true;
  // })

  // it.only("should focus on the first invalid field on error", function(){

  // 	reviewForm.submit();

  // 	var EmailHasFocus = browser.hasFocus("#review-email");

  // 	expect(EmailHasFocus).to.be.true
  // })
});