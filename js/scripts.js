function handleForm(event) {
  event.preventDefault();
  const userSelections = document.querySelectorAll("input[name=transportation-option]:checked");
  const userSelectionsArray = Array.from(userSelections);


  const resultsHeading = document.createElement("h2");
  // resultsHeading = <h2>[prepend-----------------append]</h2>
  
  resultsHeading.append("You use the following methods of transportation to travel to work or school:")
  // resultsHeading = <h2>You use the following methods of transportation to travel to work or school:</h2>

  document.body.append(resultsHeading);
  //<html>
  //<head>
  //<body>




  //<h2>You use the following methods of transportation to travel to work or school:</h2>
  //</body>







  userSelectionsArray.forEach(function(element) {
    const paragraph = document.createElement("p");
    paragraph.append(element.value);
    document.body.append(paragraph);

  });
}







window.addEventListener("load", function() {
  document.querySelector("form#transportation_survey").addEventListener("submit", handleForm);
  
  
  
  // we'll add more code to display results here!
});
















window.addEventListener("load", function() {
  document.querySelector("form#transportation_survey").addEventListener("submit", handleForm);
});