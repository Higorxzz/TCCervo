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

//olhinho

const passwordInput = document.getElementById('senha');
const passwordToggle = document.querySelector('.password-toggle');

passwordToggle.addEventListener('click', function() {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  passwordToggle.querySelector('i').classList.toggle('fa-eye');
  passwordToggle.querySelector('i').classList.toggle('fa-eye-slash');
});

