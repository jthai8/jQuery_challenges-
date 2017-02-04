

$(document).ready (function(){
  $("#submit").on("click",function() {
    //took input value and assigned as variable ask
    var ask = $("#question").val();
    var a = [ "Yup!", "Fuhgeddaboudit", "Maybe", "what would your mother do?", "what would an Australian do?", "Then do the opposite", "Your answer here"];
    var randomNum =  Math.floor(Math.random() * 6);
    var ourAnswer = a[randomNum];
    console.log(ask);
    //took ask and printed in H2 tag
    $("#response").text(ourAnswer);
    $("#question").val(" ");//this clears the inout bar
  });
});
