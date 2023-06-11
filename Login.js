function createUser() {
    var username = document.getElementById("newUsername").value;
    var password = document.getElementById("newPassword").value;
  
    // Gem brugeroplysningerne i localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  
    alert("Kontoen er oprettet. Du kan nu logge ind.");
  }
  
  function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Hent brugeroplysningerne fra localStorage
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");
  
    // Sammenlign med indtastede oplysninger
    if (username === storedUsername && password === storedPassword) {
      window.location.href = "forside.html";
    } else {
      alert("Forkert brugernavn eller adgangskode.");
    }
  }
  