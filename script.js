document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.navbar-toggle');
  const nav = document.querySelector('.navbar');

  navToggle.addEventListener('click', function () {
    const isVisible = nav.style.display === 'block';
    nav.style.display = isVisible ? 'none' : 'block';
  });

  // Close nav when clicking outside
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
      nav.style.display = 'none';
    }
  });
});
