const openModalButton = document.getElementById("openModalButton");
const closeModalButton = document.getElementById("closeModalButton");
const updateModal = document.getElementById("updateModal");

// Función para abrir el modal
openModalButton.addEventListener("click", function () {
  updateModal.style.display = "block"; // Mostrar el modal al hacer clic en el botón
});

// Función para cerrar el modal
closeModalButton.addEventListener("click", function () {
  updateModal.style.display = "none"; // Ocultar el modal al hacer clic en la "x"
});