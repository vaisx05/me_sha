// swiper-modal.js

// Initialize Swiper
var swiper = new Swiper('.modal_items', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Open modal function
function openModal(imageSrc, title) {
  var modal = document.getElementById('myModal');
  var modalImage = document.getElementById('modalImage');
  var modalCategory = document.getElementById('modalCategory');
  var modalTitle = document.getElementById('modalTitle');
  var modalDescription = document.getElementById('modalDescription');

  modalImage.src = imageSrc;
  modalCategory.textContent = "Category"; // Add your category here if available
  modalTitle.textContent = title;

  // Add your description here if available
  modalDescription.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  modal.style.display = "block";
}

// Close modal function
function closeModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = "none";
}

// Close modal if clicked outside the modal
window.onclick = function (event) {
  var modal = document.getElementById('myModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
