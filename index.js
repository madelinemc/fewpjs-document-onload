// Your code goes here
//First, set up a DOMContentLoaded event in order to detect when the HTML page has loaded, and the document is ready to be manipulated.
//Use the event's callback function to target the paragraph element with id="text" and replace the text with "This is really cool!"

document.addEventListener("DOMContentLoaded", function() {
    updateInnerHtml()
});

function updateInnerHtml() {
    document.getElementById("text").innerHTML = "This is really cool!";
}