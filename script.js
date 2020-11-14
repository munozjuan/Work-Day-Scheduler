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
        console.log(time.indexOf(currentTime));
        if (timeArray.indexOf(currentTime) > i) {
            $(`#${i}`).addClass('past');
            $(`#saveToDo-${i}`).prop('disabled', true);
            $(`#saveToDo-${i}`).addClass('past');
            $(`#hour-${i}`).addClass('past');
          } 
          else if (timeArray.indexOf(currentTime) == i) {
            $(`#${i}`).addClass('present');
            $(`#saveToDo-${i}`).addClass('present');
            $(`#saveToDo-${i}`).prop('disabled', false);
            $(`#hour-${i}`).addClass('present');
          }
          else if (timeArray.indexOf(currentTime) < i) {
                $(`#${i}`).addClass('future');
                $(`#saveToDo-${i}`).addClass('future');
                $(`#saveToDo-${i}`).prop('disabled', false);
                $(`#hour-${i}`).addClass('future');
              }
            });
        });


  $("button").on("click", function(){
    $('input, select, textarea').each(function() {
     var value = $(this).val(),
         name = $(this).attr('name');
     localStorage[name] = value;
        
    })});

