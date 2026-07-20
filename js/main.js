/* ========================================
   SCALEUP UNISEX SALON — JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile nav toggle ---------- */
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
    // Close on link tap
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------- Testimonial scroller controls ---------- */
  const track = document.querySelector('.testimonial-track');
  const prev = document.querySelector('.t-prev');
  const next = document.querySelector('.t-next');
  if (track && prev && next) {
    const scrollBy = () => Math.min(track.clientWidth * 0.8, 460);
    prev.addEventListener('click', () => track.scrollBy({ left: -scrollBy(), behavior: 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left: scrollBy(), behavior: 'smooth' }));
  }

  /* ---------- Gallery filter ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (filterBtns.length && galleryItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        galleryItems.forEach(item => {
          if (filter === 'all' || item.dataset.cat === filter) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ---------- Contact form handling ---------- */
  const form = document.querySelector('.contact-form');
  const success = document.querySelector('.form-success');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name');
      const service = data.get('service');
      const date = data.get('date');
      const time = data.get('time');

      // Build a WhatsApp pre-filled message — sends booking to salon.
      const msg = `Hi Scaleup Salon, I'd like to book an appointment.%0A%0AName: ${encodeURIComponent(name)}%0AService: ${encodeURIComponent(service)}%0ADate: ${encodeURIComponent(date)}%0ATime: ${encodeURIComponent(time)}`;
      const waLink = `https://wa.me/919003158542?text=${msg}`;

      if (success) {
        success.classList.add('show');
        success.innerHTML = `Thank you, ${name}! Your request has been recorded. <a href="${waLink}" target="_blank" style="color:var(--blush);text-decoration:underline;">Tap here to confirm on WhatsApp →</a>`;
      }
      form.reset();
      // Auto-open WhatsApp after a short delay
      setTimeout(() => { window.open(waLink, '_blank'); }, 800);
    });
  }

  /* ---------- Smooth in-page anchor offset ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const y = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    });
  });

});
