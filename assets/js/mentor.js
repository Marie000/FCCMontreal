/**
 * Created by mariepelletier on 2016-06-17.
 */
function SubmitSignup(){
    console.log('submit')
    event.preventDefault();
    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    var email = document.getElementById('signupEmail').value,
        password = document.getElementById('signupPassword').value,
        password2=document.getElementById('retypePassword').value;


    if(email == "" ) {
        //document.form.Email.focus();
        document.getElementById("errorBox").innerHTML = "enter the email";
        console.log('enter the email')
        return false;
    }else if(!emailRegex.test(email)){
        //document.form.Email.focus();
        document.getElementById("errorBox").innerHTML = "enter the valid email";
        return false;
    }



    if(password == "")
    {
        //document.form.Password.focus();
        document.getElementById("errorBox").innerHTML = "enter the password";
        return false;
    }
    if(password2 != password){
        //document.form.Password2.focus();
        document.getElementById("errorBox").innerHTML = "passwords do not match";
        return false;
    }
    if(password.length<6){
        document.getElementById("errorBox").innerHTML = "passwords must be at least 6 characters long";
        return false;
    }
    var passwordRegexNumbers = /[0-9]/;
    if(!passwordRegexNumbers.test(password)){
        document.getElementById("errorBox").innerHTML = "passwords must contain at least one number";
        return false;        
    }
    if(email != '' && password != '' && password2 != ''){
        document.getElementById("errorBox").innerHTML = "form submitted successfully";
    }

}
