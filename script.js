document.getElementById('contactForm').onsubmit = function(e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent = 
    'Thank you for contacting! Your message has been received.';
  document.getElementById('contactForm').reset();
};