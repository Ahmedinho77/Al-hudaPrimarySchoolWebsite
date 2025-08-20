    function toggleMenu() {
      const menu = document.getElementById("menu");
      if (menu.style.display === "flex") {
        menu.style.display = "none";
      } else {
        menu.style.display = "flex";
      }
    }

     document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault(); // Prevent form refresh

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let successMsg = document.getElementById("successMsg");

    if(name === "" || email === "" || message === ""){
      alert("⚠️ Please fill in all fields.");
      return;
    }

    
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)){
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    
    successMsg.style.display = "block";

    
    document.getElementById("contactForm").reset();
  });
