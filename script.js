document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    alert(`Redirecting to ${link.textContent}`);
  });
});
