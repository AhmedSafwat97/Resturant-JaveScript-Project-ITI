var UserArray = [];


// for SignUp
function submitUser() {
  var inputName = document.getElementById("Name");
  var inputEmail = document.getElementById("Email");
  var inputPassword = document.getElementById("Password");
  var inputAddress = document.getElementById("Address");
  var inputPhone = document.getElementById("Phone");
  var message = document.getElementById("Message");

  var userObject = {
    Name: inputName.value,
    Email: inputEmail.value,
    Password: inputPassword.value,
    Phone: inputPhone.value,
    Address: inputAddress.value,
  };

if (inputName.value != "" && inputEmail.value != "" && inputPassword != "") {
  var checkUser =  UserArray.find(function (U) {
    return U.Email === inputEmail.value ;
   })
  
   if (!checkUser) {
    console.log("Sign Up successful", checkUser);
    UserArray.push(userObject)
    window.location.href = "./SigIn.html"
  } else {
    console.log("This Email Already Taken");
    message.innerHTML = "This Email Already Taken";
  }

  localStorage.setItem("UsersData", JSON.stringify(UserArray));
  console.log(UserArray);
} else {
    console.log("Please fill the inputs")
    message.innerHTML = "Please fill the inputs";
}

  // to empty the Input after Submit
  inputName.value = "";
  inputEmail.value = "";
  inputPassword.value = "";
  inputPhone.value = "";
  inputAddress.value = "";
}



// for SignIn
function SignIn() {
  var inputEmail = document.getElementById("Email");
  var inputPassword = document.getElementById("Password");
  var message = document.getElementById("Message");

  var retrievedData = localStorage.getItem("UsersData");

  if (retrievedData) {
    var data = JSON.parse(retrievedData);
    console.log(data);

    // Check the user Is in the array or not
    var user = data.find(function (u) {
      return u.Email === inputEmail.value && u.Password === inputPassword.value;
    });

    if (user) {
      console.log("Login successful", user);
      window.location.href = "./MainPage.html"
    } else {
      console.log("Invalid email or password");
      message.innerHTML = "Invalid email or password";
    }
  } else {
    console.log("No data found");
  }
}
