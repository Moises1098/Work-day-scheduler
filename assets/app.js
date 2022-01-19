var CurrentDayDispEl = $('#currentDay')

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do');
    CurrentDayDispEl.text(rightNow)
};

displayTime() 

//time blocks

function saveEvent() {
   var userData = $(this).siblings("textarea").val()
   var timeBlock = $(this).siblings("textarea").attr("id")
   localStorage.setItem(timeBlock, userData)

}

$("button").click(saveEvent) 
$("#hour-9").val(localStorage.getItem("hour-9"))
$("#hour-10").val(localStorage.getItem("hour-10"))
$("#hour-11").val(localStorage.getItem("hour-11"))
$("#hour-12").val(localStorage.getItem("hour-12"))
$("#hour-1").val(localStorage.getItem("hour-1"))
$("#hour-2").val(localStorage.getItem("hour-2"))
$("#hour-3").val(localStorage.getItem("hour-3"))
$("#hour-4").val(localStorage.getItem("hour-4"))
$("#hour-5").val(localStorage.getItem("hour-5"))

// var timeColor = $('hour')
// var timetNow = moment().format('hh');

// if (moment.format('hh') > timeColor){
//     timeColor.classList.add('bg-success')
//     timeColor.classList.remove('bg-secondary')
//     timeColor.classList.remove('bg-danger')

// }
// if (moment.format('hh') < rightNow){
//     timeColor.classList.add('bg-secondary')
//     timeColor.classList.remove('bg-danger')
//     timeColor.classList.remove('bg-success')
// }

// if (moment.format('hh') === rightNow){
//     timeColor.classList.add('bg-danger')
//     timeColor.classList.remove('bg-secondary')
//     timeColor.classList.remove('bg-success')
// }


//credit = https://github.com/rosajen27/work-day-scheduler for below code:

var now = new Date().getHours();
// moment().hour(); 



function colorCode() {
  if (now > 9) {
    $("#hour-9").addClass("past");
  } else if (now = 9) {
    $("#hour-9").addClass("present");
  } else if (now < 9) {
    $("#hour-9").addClass("future");
  }
  if (now > 10) {
    $("#hour-10").addClass("past");
  } else if (now = 10) {
    $("#hour-10").addClass("present");
  } else if (now < 10) {
    $("#hour-10").addClass("future");
  }
  if (now > 11) {
    $("#hour-11").addClass("past");
  } else if (now >= 11 && now < 12) {
    $("#hour-11").addClass("present");
  } else if (now < 11) {
    $("#hour-11").addClass("future");
  }
  if (now > '12') {
    $("#hour-12").addClass("past");
  } else if (now >= 12 && now < 13) {
    $("#hour-12").addClass("present");
  } else if (now < 12) {
    $("#hour-12").addClass("future");
  }
  if (now > 13) {
    $("#hour-1").addClass("past");
  } else if (now >= 13 && now < 14) {
    $("#hour-1").addClass("present");
  } else if (now < 13) {
    $("#hour-1").addClass("future");
  }
  if (now > 14) {
    $("#hour-2").addClass("past");
  } else if (now >= 14 && now < 15) {
    $("#hour-2").addClass("present");
  } else if (now < 14) {
    $("#hour-2").addClass("future");
  }
  if (now > 15) {
    $("#hour-3").addClass("past");
  } else if (now >= 15 && now < 16) {
    $("#hour-3").addClass("present");
  } else if (now < 15) {
    $("#hour-3").addClass("future");
  }
  if (now > 16) {
    $("#hour-4").addClass("past");
  } else if (now >= 16 && now < 17) {
    $("#hour-4").addClass("present");
  } else if (now < 16) {
    $("#hour-4").addClass("future");
  }
  if (now > 17) {
    $("#hour-5").addClass("past");
  } else if (now >= 17 && now < 18) {
    $("#hour-5").addClass("present");
  } else if (now < 17) {
    $("#hour-5").addClass("future");
  }
}
