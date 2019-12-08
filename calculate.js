
// Main Function - User Choice
function mainFunction()
{
  // get users choice
  var userChoice = document.getElementById("choice").value;
  // make sure choice is of type number or (float or integer)
  var userChoiceToInt = parseFloat(userChoice);

  // Choices:
  // 1- Gpa calulator
  if (userChoiceToInt == 1)
  {
    // Create Input Field with an id="usersinputs" and Get users input
    var inputField = document.createElement("INPUT");
    inputField.id = 'usersinputs';
    // Create a Button
    var enterBtn = document.createElement("BUTTON");
    enterBtn.id = 'enterBtnId';
    enterBtn.innerHTML="Enter";
    // Create a break after the input and button
    var newLine = document.createElement("br");
    // Append the input field, enter button and new line to the page
    document.body.appendChild(inputField);
    document.body.appendChild(enterBtn);
    document.body.appendChild(newLine);

    // Ask the user for the number of courses calculate the gpa for
    var resulting = document.getElementById("result").innerHTML="GPA Calulator<br>How many courses do you wish to calculate?";

    // Call function when user hits enter
    var pressEnter = document.getElementById("enterBtnId").onclick = function()
    {
      // Get the amount of courses the user will calculate the gpa for
      var usersWish = document.getElementById("usersinputs").value;
      // Create a p tag for output feedback to user and factor in their input to show you grabbed what they entered
      var makePtag = document.createElement("p");
      // Set the id, inner text uncluding user input to show we have it, and append the p tag to the page
      makePtag.id='one';
      makePtag.innerHTML="Enter your " + usersWish + " courses grades";
      document.body.appendChild(makePtag);

      // Initialize the iterator; call it "i", for the following loop
      var i;
      // Loop from 0 up to x amount of courses the user specified and create x amount of input fields and breaks
      for (i = 0; i < usersWish; i++)
      {
        var make = document.createElement("input");
        // Create grade points field box
        var gradePointsEarned = document.createElement("input");
        // create a break in the page (new line)
        var separateit = document.createElement("br");
        // Set the class and id
        make.class='wishes';
        gradePointsEarned.class='gradePointsEarnedClass';

        make.setAttribute("id", i);
        // Append the newly created inputs and breaks to the page
        document.body.appendChild(gradePointsEarned);
        document.body.appendChild(make);
        document.body.appendChild(separateit)
      }
      // Create Enter button for sum and average
      var enterbutton = document.createElement("button");
      var separateThem = document.createElement("br");
      enterbutton.id='enterbuttoncreated';
      enterbutton.innerHTML="Sum for now";
      //enterbuttons.setAttribute("onclick","sum()");
      document.body.appendChild(separateThem);
      document.body.appendChild(enterbutton);

      document.getElementById("enterbuttoncreated").onclick = function()
      {
        // Sum loop
        var summation = 0;
        for (i = 0; i < usersWish; i++)
        {
          var letsGrabEachBox = document.getElementById(i).value;
          var eachiterationsvalue = parseFloat(letsGrabEachBox);
          summation += eachiterationsvalue;
        }
        // Calculate Average and log it
        var average = summation/usersWish;
        console.log("the average is " + parseFloat(average));
        // Log the sum
        console.log(summation);
        console.log(gradePointsEarned);

        // GPA Formula is calculated by dividing the total amount of grade points earned by the total amount of credit hours attempted


      }
      // Sum Enter Button
      var newinput = document.getElementById("enterbuttoncreated");
      newinput.addEventListener("onkeypress", function(event) {
        if (event.keyCode === 13) {
         //event.preventDefault();
         document.getElementById("enterbuttoncreated").click();
        }
      });
    }
    //var moveIt = document.getElementById("moveithere").innerHTML = btn;

  }
  else if (userChoiceToInt === 3)
  {
    alert("You Picked 3");
    var resulting = document.getElementById("result").innerHTML="You picked 3";
  }

}



// Main Function Enter Button
var input = document.getElementById("choice");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   //event.preventDefault();
   document.getElementById("myMainBtn").click();
  }
});
