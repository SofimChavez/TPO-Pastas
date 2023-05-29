function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var error = false;

    if (name === "") {
      document.getElementById("name").classList.add("error");
      error = true;
    } else {
      document.getElementById("name").classList.remove("error");
    }

    if (email === "") {
      document.getElementById("email").classList.add("error");
      error = true;
    } else {
      document.getElementById("email").classList.remove("error");
    }

    if (cantidad === "") {
        document.getElementById("cantidad").classList.add("error");
        error = true;
      } else {
        document.getElementById("cantidad").classList.remove("error");
      }

    if (message === "") {
      document.getElementById("message").classList.add("error");
      error = true;
    } else {
      document.getElementById("message").classList.remove("error");
    }

    if (error) {
      return false; // Evita enviar el formulario si hay errores
    }
  }