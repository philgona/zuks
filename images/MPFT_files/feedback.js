// Get the modal
var modal = document.getElementById("feedback_modal");

// Get the button that opens the modal
var btn = document.getElementById("open_feedback");

// Get the <close> element that closes the modal
var close = document.getElementById("close_feedback");

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <close> (x), close the modal
close.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
