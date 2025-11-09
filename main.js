const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});



// offers download
document.getElementById('downloadBtn').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'Travel_agency_Report.pdf';
  link.download = 'Travel_agency_Report.pdf';
  link.click();
});


