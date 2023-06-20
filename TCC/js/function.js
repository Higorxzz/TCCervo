// Obtém o botão de perfil e o menu dropdown
var profileButton = document.getElementById("profile-button");
var profileDropdown = document.getElementById("profile-dropdown");

// Função para alternar a exibição do menu dropdown
function toggleDropdown() {
  profileDropdown.classList.toggle("show");
}

var profileButton = document.getElementById("profile-button");
var profileDropdown = document.getElementById("profile-dropdown");

profileButton.addEventListener("click", function() {
    profileDropdown.classList.toggle("show");
});
