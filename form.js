const form = document.getElementById("registration");
const submitButton = document.getElementById("sign-up");

var fName = document.getElementById("first-name").value;
var lName = document.getElementById("last-name").value;
var uName = document.getElementById("user-name").value;
var phoneNumber = document.getElementById("phone-number").value;
var personAge = document.getElementById("person-age").value;
var hobbies = document.getElementById("hobbies").value;
var emailInput = document.getElementById("email-input").value;
var pswdInput = document.getElementById("password-input").value;
var confirmPswd = document.getElementById("confirm").value;
var country = document.getElementById("country").value;
var postalCode = document.getElementById("postal-code").value;
var termsConditions = document.getElementById("consent").value;

let userInfo = {}

submitButton.addEventListener("click", (e) => {
    console.log(e, form);
    for ( var i = 0; i < form.elements.length; i++ ) {
        var inputField = form.elements[i];
        inputFieldName = inputField.name
        inputFieldValue = inputField.value

        console.log(inputField.value)
        if (inputFieldValue !== "") {
            userInfo[inputFieldName] = inputFieldValue
        }
     }
     console.log(userInfo)
})

function formValidation(e){
    // test FIRSTNAME
    // 
    var fName = document.getElementById("first-name").value;
    if(fName == ""){
        alert('Please Enter First Name');
        document.getElementById('first-name').style.borderColor = "#ff8400";
        return false;
    }else{
        document.getElementById('first-name').style.borderColor = "#00ffae";
    }
    if (/^[0-9]+$/.test(document.getElementById("first-name").value)) {
        alert("First Name Contains Numbers!");
        document.getElementById('first-name').style.borderColor = "#ff8400";
        return false;
    }else{
        document.getElementById('first-name').style.borderColor = "#00ffae";
    }
    if(fName.length <=2){
        alert('Your Name is Too Short');
        document.getElementById('first-name').style.borderColor = "#ff8400";
        return false;
    }else{
        document.getElementById('first-name').style.borderColor = "#00ffae";
    }
    // test LASTNAME
    // 
    var lName = document.getElementById("last-name").value;
    if(lName == ""){
        alert('Please Enter First Name');
        document.getElementById('last-name').style.borderColor = "#ff8400";
        return false;
    }else{
        document.getElementById('last-name').style.borderColor = "#00ffae";
    }
    if (/^[0-9]+$/.test(document.getElementById("last-name").value)) {
        alert("First Name Contains Numbers!");
        document.getElementById('last-name').style.borderColor = "#ff8400";
        return false;
    }else{
        document.getElementById('last-name').style.borderColor = "#00ffae";
    }
    if(lName.length <=2){
        alert('Your Name is Too Short');
        document.getElementById('last-name').style.borderColor = "#ff8400";
        return false;
    }else{
        document.getElementById('last-name').style.borderColor = "#00ffae";
    }
    // test USERNAME
    // 
    var uName = document.getElementById("user-name").value;
    if (uName == ""){
        alert('Fill in a custom username');
        document.getElementById('user-name').style.borderColor = "#ff8400";
        return false;
    } else {
        document.getElementById('user-name').style.borderColor = "#00ffae";
    }
    
    if (/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(document.getElementById("user-name").value)) {
        alert("Please only use standard alphanumerics");
        document.getElementById('user-name').style.borderColor = "#ff8400";
        return false;
    } else {
        document.getElementById('user-name').style.borderColor = "#00ffae";
    }
    // test PHONE-NUMBER
    // 
    var phoneNumber = document.getElementById("phone-number").value;
    if (phoneNumber == ""){
        alert('Fill in a custom username');
        document.getElementById('user-name').style.borderColor = "#ff8400";
        return false;
    } else {
        document.getElementById('phone-number').style.borderColor = "#00ffae";
    }
    if (/^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g.test(document.getElementById("phone-number").value)){
        alert("Insert valid phone number")
        document.getElementById('phone-number').style.borderColor = "#ff8400";
    } else {
        document.getElementById('phone-number').style.borderColor = "#00ffae";
    }
    // test AGE 
    // 
    var personAge = document.getElementById("person-age").value;
    if (isNaN(personAge) || personAge < 14 || personAge > 99) {
        alert("Age requirements are not met");
        document.getElementById('person-age').style.borderColor = "#ff8400";
      } else {
        document.getElementById('person-age').style.borderColor = "#00ffae";
      }
    console.log("submitted");
    // test E-MAIL 
    // 
    var emailInput = document.getElementById("email-input").value;
    if (emailInput == ""){
        alert("Fill in a G-mail address");
        document.getElementById('email-input').style.borderColor = "#ff8400"
    }
    else if (/^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com)$/.test(emailInput)) {
        // Valid  gmail id.
        document.getElementById('email-input').style.borderColor = "#00ffae";
    } else {
        alert("Not a valid G-mail account");
        document.getElementById('email-input').style.borderColor = "#ff8400";
    }
    // check PASSWORDS 
    var pswdInput = document.getElementById("password-input").value;
    var confirmPswd = document.getElementById("confirm").value;
    if (pswdInput == '') {
        alert ("Please enter Password"); 
        document.getElementById('password-input').style.borderColor = "#ff8400";  
    }  
    else if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(pswdInput)){
        document.getElementById('password-input').style.borderColor = "#00ffae";  
    }
    // else if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(pswdInput) != pswdInput){
    //     alert("Password must contain: a digit, an uppercase & lowercase letter and a special character");
    //     document.getElementById('password-input').style.borderColor = "#ff8400";
    // }
    // If confirm password not entered 
    else if (confirmPswd == ''){
        alert ("Please enter confirm password");
        document.getElementById('confirm').style.borderColor = "#ff8400";
            
    // If Not same return False.     
    } else if (pswdInput !== confirmPswd) { 
        alert ("\nPassword did not match: Please try again...");
        document.getElementById('password-input').style.borderColor = "#ff8400";
        document.getElementById('confirm').style.borderColor = "#ff8400"; 
        return false; 
    } 
    // If same return True. 
    else{ 
        document.getElementById('password-input').style.borderColor = "#00ffae";
        document.getElementById('confirm').style.borderColor = "#00ffae"; 
        return true; 
    }
}

function clearAll () {
    document.getElementById("registration").reset();
    console.log("cleared");
}

    
