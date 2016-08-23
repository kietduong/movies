function Cost(age) {
  if (age === "Adult") {
        return 11.50;
      } else {
        return 7;
      }
    }

    function showtimeCost (cost, time) {
      if (time === "2:00PM Matinee") {
        return cost -= 4.50;
      } else {
        return cost;
      }
    }
    function qualityCost (cost, type) {
      if (type === "IMAX 3D") {
        return cost += 1.50;
      } else {
        return cost;
      }
    }
// debugger;


//front end
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var ticketPrice = 0;
    var inputtedMovie = $('#movie option:selected').val();
    var inputtedAge  = $('#age option:selected').val();
    var inputtedShowtime  = $('#showtime option:selected').val();
    var inputtedQuality = $('#quality option:selected').val();



    var cost = 0;

    cost = Cost(inputtedAge);

    cost = showtimeCost(cost, inputtedShowtime);

    cost = qualityCost(cost, inputtedQuality);

    console.log(cost);

    $("h5").append("Your " + inputtedQuality + " " + inputtedAge + " screening of " + inputtedMovie + " starting at: " + inputtedShowtime + " costs:  $" + cost);

    // var actualTicket =
  });

});
