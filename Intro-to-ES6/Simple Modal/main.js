// Get modal element
var modal = document.getElementById("simpleModal");
// Get open modal button
var modalBtn = document.getElementById("modal-Btn");
// Get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// Listen for open click
modalBtn.addEventListener("click", openModal);

// Listen for close click
closeBtn.addEventListener("click", closeModal);

// Listen for outside click
window.addEventListener("click", clickOutside);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none'
    }
}