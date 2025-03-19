// Open Side Menu
function openMenu() {
  document.getElementById("sideMenu").style.width = "250px";
}

// Close Side Menu
function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
}

// Smooth Scrolling Fix
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  });
});

// Donate Button Alert (Only when clicked)
document.getElementById('donateBtn').addEventListener('click', function() {
  alert("Thank you for supporting our cause!");
});
