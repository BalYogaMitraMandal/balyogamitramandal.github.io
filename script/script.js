var searchClicked=false;

var nullNameError="Please insert your name";
var nullEmailError="Please insert your email";
var nullQuestionError="Please insert your message";
var invalidEmailError="Please insert a valid email address";

var valid=true;

$(function(){
setSearchInputClickHandler();
validateSendEmailForm();
});

/**
 *	Removes the text in the search text box when clicked on it.
 */
function setSearchInputClickHandler(){
	$("#searchInput").click(function(){
		if(searchClicked==false){
			this.value='';
			searchClicked=true;
		}
	});
}

/**
 *	Validates the send email form.
 */
function validateSendEmailForm(){
    $("#sendButton").click(function(){
		
		//clear previous messages
		$("#nameError").text("");
		$("#emailError").text("");  
		$("#questionError").text("");  
		valid=true;  
		
		//verify whether the name text box is empty
		if(document.getElementById("nameTextBox").value=="" || document.getElementById("nameTextBox").value==null){
			$("#nameError").text(nullNameError);
			valid=false;
		}
		
		//verify whether the question text area is empty
		if(document.getElementById("questionTextArea").value=="" || document.getElementById("questionTextArea").value==null){
			$("#questionError").text(nullQuestionError);
			valid=false;
		}
		
		//verify whether the inserted email address is valid
		var reg = "/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/";
		var email = document.getElementById("emailTextBox").value;
		if(!(email.indexOf(".") > 2) || !(email.indexOf("@") > 0)) {
			$("#emailError").text(invalidEmailError); 
			valid=false;
		}
		
		//verify whether the email text box is empty
		if(document.getElementById("emailTextBox").value=="" || document.getElementById("emailTextBox").value==null){
			$("#emailError").text(nullEmailError);
			valid=false;
		}

		//if the inserted data is valid, then sumbit the form
		if(valid==true){
			$("#sumbitForm").submit();
		}
    });
}

