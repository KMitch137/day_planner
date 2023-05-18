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

var saveButton = document.getElementById("btn");

var input = document.getElementById("#toDo");


saveButton.addEventListener("click", saveText);


function saveText() {
  var descriptionText = input.value.trim()
  localStorage.setItem("description", JSON.stringify(descriptionText));
};

function init() {
  localStorage.getItem("description");
}
b

console.log(input)


// function init() {
//   var storedDescription = JSON.parse(localStorage.getItem("description"));
// }

