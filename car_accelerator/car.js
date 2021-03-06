$(document).ready(function() {
  $("#car_reg_btn").on("click", function() {
    $(".car_reg").hide();
    function car_result() {
      var speed = 0;
      return {
        //needed to set make, model and year equal to input value to work
        make:$("#make").val(),
        model:$("#model").val(),
        year: $("#year").val(),
        getSpeed: function() {return speed;},
        accelerate: function() {
          if (speed < 85 ) {
            speed += 10;
            $("#p_speed").addClass("p_speed");
          } else if (speed > 60 && speed < 90) {
            $("#p_speed").addClass("warning");
            speed -= 7;
          } else {
          speed -= 7;
          }
        },
        brake: function() {
          if (speed <= -7) {
            speed = 0;
          } else if (speed-7 < 0) {
            speed = 0;
          } else {
            speed -= 7;
          }
        }
      }
    }

//in order to call out information from the object car_result needed to create variable to call out information
//example in class var person3 = createPeople("Jill", "Jones", "123-4567")
//person3.name --> "Jill"
    var car1 = car_result( $("#make").val(), $("#model").val(), $("#year").val() );

    $("p:first").text("Your car registration information is: " + car1.make + " " + car1.model + " " + car1.year);

    $("#increase").on("click", function() {
      car1.accelerate();
      $("#p_speed").text(car1.getSpeed()+" mph");
    });

    $("#decrease").on("click", function(){
      car1.brake();
      $("#p_speed").text(car1.getSpeed()+" mph");
  });
});
});
