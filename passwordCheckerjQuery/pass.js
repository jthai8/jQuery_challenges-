$(document).ready(function () {
  $("button").on("click",function(){
    var userName = $("#username_input").val();
    var password = $("#user_password").val();
    console.log(userName,password);
    // checkCred();
    checkCred();
    $("#username_input").val(" ");
    $("#user_password").val(" ");
  });
});
function userCheck() {
  var userName = $("#username_input").val();
  var password = $("#user_password").val();
  var userCrit = password != userName && (!userName.includes("!") || !userName.includes("#") || !userName.includes("$")) && userName.length >= 6;
  return userCrit;
};

function passCheck() {
  var userName = $("#username_input").val();
  var password = $("#user_password").val();
  var passCrit = password != "password" && (password.includes("!") || password.includes("#") || password.includes("$")) && password.length >=6;
  return passCrit;
}
function checkCred(){
  var response = {
    valid:"Your Username and password meet the credentials.",
    userreason: "Your Username failed because one or more of the following reasons: Cannot contain the following: $, # and !, cannot be the same as your password and/or must be at least 6 characters.",
    passwordreason: "Your Password failed because one or more of the following reason: Cannot equal 'password', must contain one of the following: $, # or ! and/or must be at least 6 characters long.",
  };
  var userName = $("#username_input").val();
  var password = $("#user_password").val();
  if (passCheck()===true && userCheck()===true) {
    $("p").text(response.valid);
  } else if (passCheck() === false) {
     $("p").text(response.userreason);
     $("#p1").text(response.passwordreason);
  };
};

/////building userCheck and passCheck functions to plug into checkCred
