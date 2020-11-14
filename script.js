$(document).ready(function(){
    /* Display the current date at the top */
    $("#currentDay").text(moment().format("dddd, MMMM Do"));


    // Time Array of the hours in our scheduler
    var times = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
    // current time moment.js
    var currentTime = moment().format("h A");

    //set the markup text to the correct time
    $(".Hour").each(function(i){
        $(this).text(moment().hour(i+9).format("h A"))
        
    })
    console.log(currentTime);


    $('.HourRow').each(function(i) {
        console.log(timeArray.indexOf(currentTime));
       
        
      });




})

