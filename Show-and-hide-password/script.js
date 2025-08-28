const togglePasswordButton = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePasswordButton.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordButton.textContent = "Hide password";
    togglePasswordButton.classList.remove("show-password");
    togglePasswordButton.classList.add("hide-password");
  } else {
    passwordInput.type = "password";
    togglePasswordButton.textContent = "Show password";
    togglePasswordButton.classList.remove("hide-password");
    togglePasswordButton.classList.add("show-password");
  }
});
