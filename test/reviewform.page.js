class ReviewForm {
	get form() { return $("comment-form");}
	get email() { return $("#review-email");}
	get content() { return $("#review-content");}


	submit(email, review ) {
  		if (email) {
    	// enter the email address
    	this.email.setValue(email);
  		}
  
  		if (review) {
    	// enter the text in the comment form
    	this.content.setValue(review);
  		}

  		//submit the review
  		this.form.submitForm();
	}

}

module.exports = new ReviewForm();