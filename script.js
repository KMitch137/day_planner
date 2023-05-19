// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  var currentTime = $("#current-time");
  var currentHour = dayjs().format('H');

  function displayTime() {
    var rightNow = dayjs().format('dddd MMM DD, YYYY [|] hh:mm:ss a');
    currentTime.text(rightNow);
  }

  function blockColor() {
    $(".time-block").each(function () {
      var blockHour = (this.id);
      // console.log(this.id)
      $(this).toggleClass("past", blockHour < currentTime);
      $(this).toggleClass("present", blockHour == currentTime);
      $(this).toggleClass("future", blockHour > currentTime);
    });
  }

  function refreshColor() {
    $(".time-block").each(function () {
      var blockHour = parseInt(this.id);
      if (blockHour == currentHour) {
        $(this).removeClass("past, future").addClass("present");
      } else if (blockHour > currentHour) {
        $(this).removeClass("past, present").addClass("future");
      } else {
        $(this).removeClass("future, present").addClass("past");
      }
    });
  }


  displayTime();
  setInterval(displayTime, 1000);
  setInterval(refreshColor, 1000);
  blockColor();
  refreshColor();


});

var saveButton = document.querySelectorAll(".btn");

var input = document.getElementById("#toDo");

for (var i = 0; i < saveButton.length; i++) {

  saveButton[i].onclick = saveText
}


function saveText() {

  var descriptionText = this.previousElementSibling.value.trim()
  var time = this.parentNode.getAttribute("id")

  localStorage.setItem(time, descriptionText);
};

for (var i = 8; i <= 17; i++){

var element = document.getElementById(i).children[1]

element.append(localStorage.getItem(i))

if (element.innerHTML === "null") {
  element.value = ""
}
}


