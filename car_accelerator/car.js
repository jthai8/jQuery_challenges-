$(document).ready(function() {
  $("#car_reg_btn").on("click", function() {
    $(".car_reg").hide();

    function car_result() {
      var speed = 0;
      return {
        make:$("#make").val(),
        model:$("#model").val(),
        year:$("#year").val(),
        getSpeed: function() {return speed;},
        accelerate: function() {speed = speed+10;},
        brake: function() {speed = speed - 7;}
      }
    }
    $("#increase").on("click", function(){
      console.log("hello world")
      car_result.accelerate;
      $("#p_speed").text(car_result.getSpeed());
    });
    $("#decrease").on("click", function(){
        car_result.brake;
    });

    $("p:first").text("Your car registration information is: " + car_result.make + " " + car_result.model + " " + car_result.year);
  });
});

var car1 = ("")

//
// function carObject(make, modelYear,color){
//   var speed = 0;
//   return{
//     make:make,
//     modelYear:modelYear,
//     color:color,
//     getData:function(){return this.make + " " + this.modelYear+ " "+ this.color},
//     getSpeed: function () {return speed},
//     accelerate: function () {speed = speed+10},
//     brake: function () {
//       if (speed < 0) {
//         speed = 0;
//       } else {
//         speed = speed-7;
//       }
//     }
//   }
// }
// var car1 = carObject("Lexus","2014","Hot Pink");
//
//
// while (car1.getSpeed() <= 85){
//     car1.accelerate();
//     }
//     if (car1.getSpeed() > 85) {
//       car1.brake();
//     }
//
// var drivingSpeed = car1.getSpeed();
//
// while (car1.getSpeed() >= -7){
//   console.log(car1.getSpeed());
//   if(car1.getSpeed()===0){
//     break;
//   }
//   car1.brake();
//   console.log(car1.getSpeed());
// }
