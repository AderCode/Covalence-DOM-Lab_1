document.addEventListener("DOMContentLoaded", function() {
    // Creating the 'Button' and 'Button Text' and assigning to variables.
    let button = document.createElement("button");
    let btnText = document.createTextNode("Add Square");
    //Place the 'Button Text' within the 'Button'
    button.appendChild(btnText);
    //Place 'Button' within the 'Body' of the HTML file
    document.body.appendChild(button);
})