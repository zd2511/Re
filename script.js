const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
const dateInput = document.querySelector('input[name="date"]');
const today = new Date();
dateInput.min = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
document.getElementById('bookingForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Hello, I would like to book an appointment.\\nService: ${data.get('service')}\\nPreferred date: ${data.get('date')}\\nContact number: ${data.get('phone')}`;
  document.getElementById('formMessage').textContent = 'Your request is ready. Choose your clinic’s WhatsApp number to send it, or connect a booking service to receive appointments online.';
  // Replace the placeholder number below with the clinic's WhatsApp number to enable direct booking.
  const clinicWhatsApp = '';
  if (clinicWhatsApp) window.open(`https://wa.me/${clinicWhatsApp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
