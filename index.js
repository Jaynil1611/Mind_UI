// Modal
const showModal = document.querySelector("#show-modal");

const closeModal = document.querySelector("#close-modal");

const dismissModal = document.querySelector("#dismiss-modal");

const modalContent = document.querySelector(".modal");

const body = document.querySelector("body");

const handleModalOpen = () => {
  modalContent.style.display = "flex";
  setTimeout(() => handleCloseModal(), 5000);
};

const handleCloseModal = () => {
  modalContent.style.display = "none";
};

window.onclick = function (event) {
  event.target == modalContent && handleCloseModal();
};

showModal.addEventListener("click", handleModalOpen);

closeModal.addEventListener("click", handleCloseModal);

dismissModal.addEventListener("click", handleCloseModal);

// --------------------------------------------------------------------------------------------------------------------------------

// Toast
const showToast = document.querySelector("#show-toast");

const closeToast = document.querySelector("#close-toast");

const toastContent = document.querySelector(".toast");

const handleToastOpen = () => {
  toastContent.style.display = "flex";
  setTimeout(() => handleToastClose(), 5000);
};

const handleToastClose = () => {
  toastContent.style.display = "none";
};

showToast.addEventListener("click", handleToastOpen);

closeToast.addEventListener("click", handleToastClose);
