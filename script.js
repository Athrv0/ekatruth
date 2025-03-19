// Open the side menu
function openMenu() {
  document.getElementById("sideMenu").style.width = "250px";
}

// Close the side menu
function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      closeMenu(); // Close the menu on click (mobile-friendly)
    }
  });
});

// Donate Button Alert
const donateButton = document.querySelector('button');
if (donateButton) {
  donateButton.addEventListener('click', function() {
    alert("Thank you for your interest in donating! Please visit our donation page.");
  });
}
