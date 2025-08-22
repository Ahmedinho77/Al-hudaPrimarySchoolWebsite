    function toggleMenu() {
      const menu = document.getElementById("menu");
      if (menu.style.display === "flex") {
        menu.style.display = "none";
      } else {
        menu.style.display = "flex";
      }
    }
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  try {
    const response = await fetch("https://formspree.io/f/mpwlvdzz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      successMsg.style.display = "block";
      form.reset();
    } else {
      const errorData = await response.json();
      alert("Error: " + (errorData.error || "Something went wrong"));
    }
  } catch (err) {
    alert("Network error: " + err.message);
  }
});