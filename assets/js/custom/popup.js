// Get all buttons that open modals
var modalBtns = document.getElementsByClassName("openModalBtn");

// Loop through all buttons and add click event listeners
for (var i = 0; i < modalBtns.length; i++) {
  modalBtns[i].onclick = function() {
    var modalId = this.getAttribute('data-modal-id');
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
}

// Get all elements with class="close" (close buttons)
var closeBtns = document.getElementsByClassName("close-custom");

// Loop through all close buttons and add click event listeners
for (var i = 0; i < closeBtns.length; i++) {
  closeBtns[i].onclick = function() {
    var modal = this.parentElement.parentElement;
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.classList.contains('modal-custom')) {
    event.target.style.display = "none";
  }
}