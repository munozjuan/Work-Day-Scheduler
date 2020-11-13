$(document).ready(function(){
    /* Display the current day of the week and date
    at the top of the page */
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
})
