document.addEventListener("DOMContentLoaded", function() {
  // Global value for 'id'
  let id = 0;

  // Create a 'Button' and 'Button Text' assigned to variables.
  let button = document.createElement("button");
  let btnText = document.createTextNode("Add Square");

  //Insert 'Button Text' within the 'Button'
  button.appendChild(btnText);

  //Insert 'Button' within the 'Body'
  document.body.appendChild(button);

  // Listens for a single click of the parent 'Button'
  button.addEventListener("click", function() {
    // Increment 'id' by 1
    id++;
    // Create a 'div'
    let div = document.createElement("div");
    // Set 'div' Class and ID
    div.setAttribute("class", "myDiv");
    div.setAttribute("id", id);
    // Insert 'div' within the 'Body'
    document.body.appendChild(div);
  });

  
});
