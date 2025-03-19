// Smooth Scrolling for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Donate Button Alert
const donateButton = document.querySelector('button');
if (donateButton) {
  donateButton.addEventListener('click', function() {
    alert("Thank you for your interest in donating! Please visit our donation page.");
  });
}

// Active Link Highlight on Scroll
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('nav a');

  sections.forEach((section, index) => {
    const top = section.offsetTop - 80;
    const bottom = top + section.offsetHeight;

    if (window.scrollY >= top && window.scrollY <= bottom) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  });
});
