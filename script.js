// display current day on page
// $('#currentDay').text(moment().format('dddd, MMMM Do'));
const d = new Date();
document.getElementById("currentDay").innerHTML = d.toDateString();

function hourUpdater() {
 // get current hours
 var currentHour = moment().hours();

 // loop over time blocks
 $('.time-block').each(function () {
  var blockHour = parseInt($(this).attr('id').split('-')[1]);

  // check if we've moved past this time
  if (blockHour < currentHour) {
   $(this).addClass('past');
  } else if (blockHour === currentHour) {
   $(this).removeClass('past');
   $(this).addClass('present');
  } else {
   $(this).removeClass('past');
   $(this).removeClass('present');
   $(this).addClass('future');
  }
 });
}

hourUpdater();

// set up interval to check if current time needs to be updated
var interval = setInterval(hourUpdater, 15000);

// load any saved data from localStorage
//9am
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
//10am
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
//11am
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
//12pm
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
//1pm
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
//2pm
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
//3pm
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
//4pm
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
//5pm
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

//Save-button function
$(document).ready(function () {
 // Event listener for save-button clicks
 $('.saveBtn').on('click', function () {
  // retrieve nearby values
  var value = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');

  // save in localStorage
  localStorage.setItem(time, value);

 });
});