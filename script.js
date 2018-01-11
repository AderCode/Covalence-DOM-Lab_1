document.addEventListener("DOMContentLoaded", function() {
    
    // Create a 'Button' and 'Button Text' assigned to variables.
    let button = document.createElement("button");
    let btnText = document.createTextNode("Add Square");
    
    //Insert 'Button Text' within the 'Button'
    button.appendChild(btnText);

    //Insert 'Button' within the 'Body'
    document.body.appendChild(button);
    // Listens for a single click of the parent 'Button'
    button.addEventListener("click", function() {
        // Create a 'div'
        let div = document.createElement("div");
        // Insert 'div' within the 'Body'
        document.body.appendChild(div);


    })

})