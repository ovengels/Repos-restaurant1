function validateForm() {
  var name = document.forms["myForm"]["fullName"].value;
  if (name == "") {
    alert("Name must be filled out full name");
    return false;
  }
  var email = document.forms["myForm"]["emailAddress"].value;
  if (email == "") {
    alert("Please enter a valid e-mail address.");
    return false;
  }
  var address = document.forms["myForm"]["emailAddress"].value;
  if (address.indexOf("@", 0) < 0)
  {
    alert("Please enter a valid e-mail address.");
    return false;
  }
  var phone = document.forms["myForm"]["phoneNumber"].value;
  if (phone == "") {
    alert("Please enter a valid phone number.");
    return false;
  }
  var inquiry = document.forms["myForm"]["forInquiry"].value;
  if (inquiry == "default") {
    alert("Please enter your reason for inquiry.");
    return false;
  }

  var answear = document.getElementsByName('question[]');
  var answearSelect = false;
  for (var ans = 0; ans < answear.length; ans++) {
    if (answear[ans].checked) {
      answearSelect = true;
      break;
    }
  }
  if (answearSelect === false) {
    alert("Please select your answear.");
    return false;
  }

  var choice = document.getElementsByName('myChoice[]');
  var hasChecked = false;
  for(var cho = 0; cho < choice.length; cho++){
    if(choice[cho].checked){
      hasChecked = true;
      alert("Thanks for submition!");
      break;
    }
  }
  if (hasChecked === false) {
    alert("Please select the best day to contact you.");
    return false;
  }
  return true;
}
