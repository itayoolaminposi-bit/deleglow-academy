// DELEGLOW ACADEMY — shared site behavior

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact / Get Started form — placeholder submit handling.
  // No backend is wired up yet: swap the alert below for a real
  // endpoint (Formspree, a serverless function, your CRM, etc).
  var form = document.querySelector('form[data-site-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.form-status');
      if (status) {
        status.textContent = 'Thanks — this form is a placeholder. Connect it to your email or CRM to start receiving messages.';
        status.style.display = 'block';
      }
      form.reset();
    });
  }
});
