// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // Add a click event listener to all Save buttons
  $(".saveBtn").on("click", function () {
    // Gets the parent time-block element as well as it's id
    var timeblock = $(this).parent().attr("id");
    // Captures the user's input
    var description = $(this).siblings(".description").val();
    // Save the user's input in local storage using the time-block id as a key
    localStorage.setItem(timeblock, description);
  });

  // Get the current hour using dayjs library
  var currentHour = dayjs().hour();

  // Loop through all the time blocks
  $(".time-block").each(function () {
    // Get the hour from the id attribute
    const hour = parseInt($(this).attr("id").split("-")[1]);
    if (hour < currentHour) {
      // If the hour is in the past, add the past class and remove the other classes
      $(this).removeClass("present future").addClass("past");
    } else if (hour === currentHour) {
      // If the hour is the current hour, add the present class and remove the other classes
      $(this).removeClass("past future").addClass("present");
    } else {
      // If the hour is in the future, add the future class and remove the other classes
      $(this).removeClass("past present").addClass("future");
    }
  });
  
  // Loads the localStorage for timeblocks
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  
  // Code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
