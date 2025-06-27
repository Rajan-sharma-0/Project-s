
// For toggling FAQ sections //////
function toggleFaq(idx) {
  for (let i = 1; i <= 4; i++) {
    const content = document.getElementById('faq-content-' + i);
    const icon = document.getElementById('faq-icon-' + i);
    if (i === idx) {
      const isOpen = !content.classList.contains('hidden');
      content.classList.toggle('hidden');
      icon.style.transform = isOpen ? '' : 'rotate(180deg)';
    } else {
      document.getElementById('faq-content-' + i).classList.add('hidden');
      document.getElementById('faq-icon-' + i).style.transform = '';
    }
  }
}


 document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar-inline');
    if (calendarEl) {
      new Datepicker(calendarEl, {
        calendarWeeks: false,
        todayHighlight: true,
        autohide: false,
        format: 'dd/mm/yyyy',
        language: 'en',
        orientation: 'bottom',
        defaultViewDate: {year: 2025, month: 5, day: 1}, // June 2025
        inline: true
      });
    }
  });

  
  document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('calendar-input');
    if (input) {
      new Datepicker(input, {
        autohide: true,
        format: 'dd/mm/yyyy',
        todayHighlight: true,
      });
    }
  });




   function runClinicCarousel() {
    const images = [
      "https://www.lifelinkr.com/wp-content/uploads/2025/01/neelkanth-fertility-using-ivf-software.jpg",
      "https://www.lifelinkr.com/wp-content/uploads/2025/01/life-center-using-ivf-software.jpg",
      "https://www.lifelinkr.com/wp-content/uploads/2025/01/horizon-using-ivf-software.jpg",
      "https://www.lifelinkr.com/wp-content/uploads/2025/01/fertility-nova-using-ivf-clinic-management-software.jpg"
    ];
    const alts = [
      "Apex IVF Care",
      "Bloom IVF",
      "Fertilia IVF",
      "Fertility Nova"
    ];
    let idx = 0;
    let intervalId = null;
    function start() {
      const img = document.getElementById('carousel-image');
      if (!img) return;
      intervalId = setInterval(() => {
        idx = (idx + 1) % images.length;
        img.src = images[idx];
        // img.alt = alts[idx];
      }, 2000);
    }
    function stop() {
      if (intervalId) clearInterval(intervalId);
    }
    // Only run on mobile/tablet
    function checkAndRun() {
      if (window.innerWidth < 768) {
        start();
      } else {
        stop();
      }
    }
    checkAndRun();
    window.addEventListener('resize', checkAndRun);
  }
  document.addEventListener('DOMContentLoaded', runClinicCarousel);