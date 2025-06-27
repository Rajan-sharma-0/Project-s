
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
