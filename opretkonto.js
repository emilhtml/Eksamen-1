function createUser() {
    var username = document.getElementById("newUsername").value;
    var password = document.getElementById("newPassword").value;
  
    // Gem brugeroplysningerne i localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  
    alert("Kontoen er oprettet. Du kan nu logge ind.");
  }
  