// Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

// You'll need to use a library like [Moment.js](https://momentjs.com/) to work with dates and times. `Moment.js` has historically been the most popular date/time library but is no longer supported by its developers. However, you can still use it for this project, or you can look into one of the following alternatives:

//   * [Luxon](https://moment.github.io/luxon/)

//   * [Day.js](https://day.js.org/)

//   * [date-fns](https://date-fns.org/)

//   * [js-Joda](https://js-joda.github.io/js-joda/)

// Whichever library you choose, be sure to read the documentation carefully!

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

/* the current day is displayed at the top of the calendar */

function setDate() {
  let currentTime = $("#currentDay");
  let DateTime = luxon.DateTime;
  var now = DateTime.local();

  currentTime.text(
    "Today's Date is " + now.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)
  );
}
setInterval(setDate, 1000);

setDate();

/* each time block is color-coded to indicate whether it is in the past, present, or future */
let DateTime = luxon.DateTime;
var currentHour = DateTime.local().toLocaleString({ hour: '2-digit', hour12: false });

console.log(currentHour)

$(".thingsToDo").each(function() {
    if (parseInt($(this).data("hour")) < currentHour) {
        $(this).addClass("past")
    } else if (parseInt($(this).data("hour")) == currentHour) {
        $(this).addClass("present")
    } else {
        $(this).addClass("future")
    }
})


/* text entered in the textarea of timeblocks needs to be saved in local storage then when the page is refreshed it needs to be rendered*/
var toDoText1 = $("#08");
var toDoText2 = $("#09");
var toDoText3 = $("#10");
var toDoText4 = $("#11");
var toDoText5 = $("#12");
var toDoText6 = $("#13");
var toDoText7 = $("#14");
var toDoText8 = $("#15");
var toDoText9 = $("#16");
var toDoText10 = $("#17");

$(".saveBtn").on("click", function () {
  
  var input = $(this).siblings()[1].value;
  var id = $(this).siblings()[1].getAttribute("id");
    
  localStorage.setItem(id, input);
});

var toDo8 = localStorage.getItem("8");
var toDo9 = localStorage.getItem("9");
var toDo10 = localStorage.getItem("10");
var toDo11 = localStorage.getItem("11");
var toDo12 = localStorage.getItem("12");
var toDo13 = localStorage.getItem("13");
var toDo14 = localStorage.getItem("14");
var toDo15 = localStorage.getItem("15");
var toDo16 = localStorage.getItem("16");
var toDo17 = localStorage.getItem("17");

toDoText1.val(toDo8);
toDoText2.val(toDo9);
toDoText3.val(toDo10);
toDoText4.val(toDo11);
toDoText5.val(toDo12);
toDoText6.val(toDo13);
toDoText7.val(toDo14);
toDoText8.val(toDo15);
toDoText9.val(toDo16);
toDoText10.val(toDo17);

// var nineAM = document.getElementById("9");
// var nineAM = $("#9");

// var saveButton = document.getElementsByClassName("saveBtn");
// var saveButton = $(".saveBtn")

// nineAM.setAttribute("name", "hannah");
// nimeAM.attr("name", "hannnah");
