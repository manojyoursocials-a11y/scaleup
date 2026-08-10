/* ========================================
   SCALEUP UNISEX SALON — JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Image extension/case fallback ----------
     If an image fails to load (e.g. the file is actually .png, .JPG,
     or .jpeg instead of the .jpg the HTML asks for), automatically
     try the other common extensions and letter-casings before giving up.
     This keeps the site working even if uploaded images don't exactly
     match the filenames/extensions used in the HTML. */
  function attachImageFallback(img) {
    const original = img.getAttribute('src');
    if (!original || !original.startsWith('images/')) return;
    const lastDot = original.lastIndexOf('.');
    if (lastDot === -1) return;
    const base = original.substring(0, lastDot);
    const candidates = ['.jpg', '.JPG', '.jpeg', '.JPEG', '.png', '.PNG', '.webp', '.WEBP']
      .map(ext => base + ext)
      .filter(candidate => candidate !== original);

    let i = 0;
    img.addEventListener('error', function handler() {
      if (i < candidates.length) {
        img.src = candidates[i++];
      } else {
        img.removeEventListener('error', handler);
      }
    });
  }
  document.querySelectorAll('img[src^="images/"]').forEach(attachImageFallback);

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

  /* ---------- Hero background carousel ---------- */
  const heroSlides = document.querySelectorAll('.hero-bg-slide');
  if (heroSlides.length > 1) {
    let heroIndex = 0;
    setInterval(() => {
      heroSlides[heroIndex].classList.remove('active');
      heroIndex = (heroIndex + 1) % heroSlides.length;
      heroSlides[heroIndex].classList.add('active');
    }, 4000);
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
      const phone = data.get('phone');
      const email = data.get('email');
      const service = data.get('service');
      const date = data.get('date');
      const time = data.get('time');
      const notes = data.get('notes');

      // Build a WhatsApp pre-filled message — sends booking to salon.
      const msg = `Hi Scaleup Salon, I'd like to book an appointment.%0A%0AName: ${encodeURIComponent(name)}%0AService: ${encodeURIComponent(service)}%0ADate: ${encodeURIComponent(date)}%0ATime: ${encodeURIComponent(time)}`;
      const waLink = `https://wa.me/918610382952?text=${msg}`;

      // Build a pre-filled email to both salon inboxes.
      const emailTo = 'scaleup.chennai@gmail.com,yoursocialsofficial@gmail.com';
      const emailSubject = encodeURIComponent(`New Appointment Booking — ${name}`);
      const emailBody = encodeURIComponent(
        `New booking request from the website:\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email || '-'}\n` +
        `Service: ${service}\n` +
        `Date: ${date}\n` +
        `Time: ${time}\n` +
        `Notes: ${notes || '-'}`
      );
      const mailtoLink = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;

      if (success) {
        success.classList.add('show');
        success.innerHTML = `Thank you, ${name}! Your request has been recorded. <a href="${waLink}" target="_blank" style="color:var(--blush);text-decoration:underline;">Tap here to confirm on WhatsApp →</a> or <a href="${mailtoLink}" style="color:var(--blush);text-decoration:underline;">send us an email →</a>`;
      }
      form.reset();
      // Open the visitor's email app with the booking pre-filled, addressed to the salon.
      window.location.href = mailtoLink;
      // Also open WhatsApp as a fallback confirmation channel.
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
