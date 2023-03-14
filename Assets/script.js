//Sets the current date at the top of the webpage using dayjs
var today = dayjs().format('dddd, MMMM D');
$('#currentDay').text(today);

$(document).ready(function() {
//Click event for save button, will save the task after clicking the save button
$('.saveBtn').on('click', function() {
    
    var task = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

//Saves task values into local storage
    localStorage.setItem(time, task);
  });
//Created a function for time blocks
function setTime() {
  var currentTime = dayjs().hour();

  $('.time-block').each(function() {
  var blockTime = parseInt($(this).attr('id').split('hour')[1]);

//If else statement for background colors for task time periods.. grey is a task that has already happened,
//red is a task in present time, and green is for future tasks
  if (blockTime > currentTime) {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
 
 } else if (blockTime < currentTime) {
     $(this).removeClass('future');
     $(this).removeClass('present');
     $(this).addClass('past');
 
 } else {
     $(this).removeClass('future');
     $(this).removeClass('past');
     $(this).addClass('present');
 }
});
}

//Keeps saved task on webpage until you edit the task to change it
$('.time-block').each(function () {
  var id = $(this).attr('id')
  $(this).children('textarea').val(localStorage.getItem(id))
})

setTime();

for (let i = 9; i <= 17; i++){
  let color = "lightgrey"
  if (dayjs().hour()== i)
    color = "lightgreen"
  if (dayjs().hour() < i)
    color = "#FFCCCB"
  $("#hour-"+i+">textarea").css("background", color)
}
console.log("HOUR", dayjs().hour())

}); 