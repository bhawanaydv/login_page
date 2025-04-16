function validateLogin(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
  
    const errorMessage = document.getElementById("error-message");
  

    const validUsername = "Bhawana";
    const validPassword = "bhawana123";
  
    if (username === validUsername && password === validPassword) {
      errorMessage.style.color = "green";
      errorMessage.textContent = "Login successful!";
      
    } else {
      errorMessage.style.color = "red";
      errorMessage.textContent = "Invalid username or password!";
    }
  
    return false;
  }
  