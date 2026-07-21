// ============================================================
// APP.JS — Thayna Virginio Nails
// Lógica principal do site
// ============================================================

'use strict';

// ─── UTILITIES ──────────────────────────────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// LocalStorage helpers
const Storage = {
  get: (key) => { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } },
  set: (key, val) => localStorage.setItem(key, JSON.stringify(val)),
};

// ─── INIT ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLoading();
  initParticles();
  initHeader();
  initMobileMenu();
  initAOS();
  initBackToTop();
  initServices();
  initGallery();
  initTestimonials();
  initFAQ();
  initBooking();
  initFooter();
});

// ─── LOADING SCREEN ──────────────────────────────────────────
function initLoading() {
  const screen = $('#loading-screen');
  if (!screen) return;
  setTimeout(() => screen.classList.add('hidden'), 2000);
}

// ─── PARTICLES ───────────────────────────────────────────────
function initParticles() {
  const container = $('#particles');
  if (!container) return;
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      --duration: ${6 + Math.random() * 8}s;
      --delay: ${Math.random() * 8}s;
      width: ${2 + Math.random() * 4}px;
      height: ${2 + Math.random() * 4}px;
      opacity: ${0.3 + Math.random() * 0.4};
    `;
    container.appendChild(p);
  }
}

// ─── HEADER ──────────────────────────────────────────────────
function initHeader() {
  const header = $('#header');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
    // Active nav
    const sections = $$('section[id]');
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    $$('.nav-link').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ─── MOBILE MENU ─────────────────────────────────────────────
function initMobileMenu() {
  const toggle = $('#menu-toggle');
  const nav = $('#nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open);
  });
  $$('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      nav.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });
}

// ─── AOS (Scroll Animations) ─────────────────────────────────
function initAOS() {
  const elements = $$('[data-aos]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('aos-visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  elements.forEach(el => obs.observe(el));
}

// ─── BACK TO TOP ─────────────────────────────────────────────
function initBackToTop() {
  const btn = $('#back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ─── SERVICES ────────────────────────────────────────────────
function initServices() {
  const grid = $('#servicos-grid');
  if (!grid) return;
  
  let cats = SERVICE_CATEGORIES;
  try {
    const saved = JSON.parse(localStorage.getItem('admin_categories'));
    if (saved) cats = saved;
  } catch(e) {}

  grid.innerHTML = cats.map((c, i) => `
    <div class="category-card" data-aos="fade-up" style="margin-bottom:16px; border: 1.5px solid #F0E0CC; border-radius: 12px; overflow:hidden; background: #fff;">
      <div class="category-header" style="background:#F9F0E8; padding: 20px 24px; display:flex; justify-content:space-between; align-items:center; cursor:pointer;" tabindex="0" role="button">
        <div>
          <h3 style="margin:0; font-family:'Playfair Display', serif; color:#6B4C35; font-size:1.4rem;">${c.icon||'💅'} ${c.name}</h3>
          <p style="margin:6px 0 0; font-size:0.95rem; color:#C9A84C;">${c.startingPrice||''}</p>
        </div>
        <div class="cat-toggle" style="color:#C9A84C; transition: transform 0.3s; font-size: 1.2rem;">▼</div>
      </div>
      <div class="category-body" style="display:none; padding: 0 24px;">
        ${!c.services || !c.services.length ? '<p style="padding:16px 0; color:#a38b76;">Nenhum serviço.</p>' : c.services.map(s => `
          <div style="padding: 16px 0; border-bottom: 1px solid #F0E0CC; display:flex; justify-content:space-between; align-items:center;">
            <div>
              <strong style="color:#6B4C35; font-size:1.1rem;">${s.name}</strong>
              <div style="font-size:0.85rem; color:#a38b76; margin-top:4px;">${s.duration ? s.duration + ' min' : ''}</div>
            </div>
            <strong style="color:#C9A84C; font-size:1.1rem;">${s.price}</strong>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.category-header').forEach(header => {
    const toggleFunc = () => {
      const body = header.nextElementSibling;
      const toggle = header.querySelector('.cat-toggle');
      const isVisible = body.style.display === 'block';
      body.style.display = isVisible ? 'none' : 'block';
      toggle.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';
    };
    header.addEventListener('click', toggleFunc);
    header.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFunc(); } });
  });

  setTimeout(initAOS, 100);
}

// ─── GALLERY ─────────────────────────────────────────────────
let currentLightboxIndex = 0;
let galleryItems = [];

function initGallery() {
  const grid = $('#galeria-grid');
  if (!grid) return;
  try {
    const saved = JSON.parse(localStorage.getItem('admin_gallery'));
    galleryItems = saved || GALLERY;
  } catch(e) {
    galleryItems = GALLERY;
  }

  renderGallery();

  // Lightbox
  const lightbox = $('#lightbox');
  const lbImg = $('#lightbox-img');
  const lbCap = $('#lightbox-caption');

  function openLightbox(index) {
    currentLightboxIndex = index;
    lbImg.src = galleryItems[index].src;
    lbImg.alt = galleryItems[index].label;
    lbCap.textContent = galleryItems[index].label;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  $('#lightbox-close')?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  $('#lightbox-prev')?.addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox(currentLightboxIndex);
  });
  $('#lightbox-next')?.addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length;
    openLightbox(currentLightboxIndex);
  });
  document.addEventListener('keydown', e => {
    if (!lightbox?.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') $('#lightbox-prev')?.click();
    if (e.key === 'ArrowRight') $('#lightbox-next')?.click();
  });

  // Expose openLightbox globally for dynamically created items
  window._openLightbox = openLightbox;
}

function renderGallery() {
  const grid = $('#galeria-grid');
  if (!grid) return;
  grid.innerHTML = galleryItems.map((item, i) => {
    return `
      <div class="galeria-item" data-index="${i}" role="button" tabindex="0" aria-label="Ver ${item.label}">
        <img src="${item.src}" alt="${item.label}" loading="lazy" />
        <div class="galeria-item-overlay">
          <span class="galeria-item-label">${item.label}</span>
        </div>
      </div>
    `;
  }).join('');

  $$('.galeria-item').forEach(item => {
    const handler = () => window._openLightbox(parseInt(item.dataset.index));
    item.addEventListener('click', handler);
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') handler(); });
  });
}

// ─── TESTIMONIALS CAROUSEL ───────────────────────────────────
function initTestimonials() {
  const track = $('#testimonials-track');
  const dotsContainer = $('#testimonial-dots');
  if (!track || !dotsContainer) return;

  let currentIndex = 0;
  let itemsVisible = getItemsVisible();
  let autoInterval;

  function getItemsVisible() {
    return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  }

  function render() {
    track.innerHTML = TESTIMONIALS.map(t => `
      <div class="testimonial-card">
        <div class="testimonial-stars">${'★'.repeat(t.rating)}</div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-author">
          <img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar" loading="lazy" />
          <div>
            <p class="testimonial-name">${t.name}</p>
            <p class="testimonial-service">${t.service}</p>
          </div>
        </div>
      </div>
    `).join('');

    // Build dots (one per page)
    const totalPages = Math.ceil(TESTIMONIALS.length / itemsVisible);
    dotsContainer.innerHTML = Array.from({ length: totalPages }, (_, i) =>
      `<button class="dot${i === 0 ? ' active' : ''}" data-page="${i}" aria-label="Ir para página ${i + 1}"></button>`
    ).join('');
    $$('.dot').forEach(d => d.addEventListener('click', () => goTo(parseInt(d.dataset.page))));
  }

  function goTo(page) {
    itemsVisible = getItemsVisible();
    const maxPage = Math.ceil(TESTIMONIALS.length / itemsVisible) - 1;
    currentIndex = Math.max(0, Math.min(page, maxPage));
    const offset = currentIndex * (100 / itemsVisible) * itemsVisible;
    track.style.transform = `translateX(-${currentIndex * (100 / itemsVisible) * itemsVisible}%)`;

    // Update card widths
    const cards = $$('.testimonial-card', track);
    cards.forEach(c => { c.style.flex = `0 0 calc(${100 / itemsVisible}% - ${(itemsVisible - 1) * 24 / itemsVisible}px)`; });

    $$('.dot').forEach((d, i) => d.classList.toggle('active', i === currentIndex));
  }

  function startAuto() {
    autoInterval = setInterval(() => {
      const totalPages = Math.ceil(TESTIMONIALS.length / itemsVisible);
      goTo((currentIndex + 1) % totalPages);
    }, 5000);
  }

  function stopAuto() { clearInterval(autoInterval); }

  render();
  setTimeout(() => goTo(0), 0);
  startAuto();

  $('#prev-testimonial')?.addEventListener('click', () => {
    stopAuto();
    const totalPages = Math.ceil(TESTIMONIALS.length / itemsVisible);
    goTo((currentIndex - 1 + totalPages) % totalPages);
    startAuto();
  });
  $('#next-testimonial')?.addEventListener('click', () => {
    stopAuto();
    const totalPages = Math.ceil(TESTIMONIALS.length / itemsVisible);
    goTo((currentIndex + 1) % totalPages);
    startAuto();
  });

  window.addEventListener('resize', () => { render(); setTimeout(() => goTo(0), 0); });
}

// ─── FAQ ─────────────────────────────────────────────────────
function initFAQ() {
  const list = $('#faq-list');
  if (!list) return;
  list.innerHTML = FAQ.map((item, i) => `
    <div class="faq-item" id="faq-item-${i}">
      <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${i}">
        ${item.q}
        <span class="faq-icon" aria-hidden="true">+</span>
      </button>
      <div class="faq-answer" id="faq-answer-${i}" role="region">
        <p>${item.a}</p>
      </div>
    </div>
  `).join('');

  $$('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      $$('.faq-item').forEach(i => i.classList.remove('open'));
      $$('.faq-question').forEach(b => b.setAttribute('aria-expanded', 'false'));
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ─── BOOKING SYSTEM ──────────────────────────────────────────
function initBooking() {
  let booking = { service: null, date: null, time: null };
  let calYear = new Date().getFullYear();
  let calMonth = new Date().getMonth();

  // Load appointments from localStorage
  function getAppointments() {
    return Storage.get('appointments') || [];
  }

  function saveAppointment(apt) {
    const apts = getAppointments();
    // Double-check no duplicate
    const dup = apts.find(a => a.date === apt.date && a.time === apt.time);
    if (dup) return false;
    apts.push(apt);
    Storage.set('appointments', apts);
    return true;
  }

  function isTimeOccupied(date, time) {
    return getAppointments().some(a => a.date === date && a.time === time && a.status !== 'cancelled');
  }

  // ── STEP NAVIGATION ──
  let currentStep = 1;

  function goToStep(step) {
    $$('.booking-step').forEach(s => s.classList.remove('active'));
    $(`#step-${step}`)?.classList.add('active');
    $$('.progress-step').forEach((s, i) => {
      s.classList.toggle('active', i + 1 === step);
      s.classList.toggle('done', i + 1 < step);
    });
    currentStep = step;
  }

  // ── STEP 1: SERVICES ──
  const servicosOptions = $('#servico-options');
  if (servicosOptions) {
    let cats = SERVICE_CATEGORIES;
    try {
      const saved = JSON.parse(localStorage.getItem('admin_categories'));
      if (saved) cats = saved;
    } catch(e){}

    servicosOptions.innerHTML = cats.map(c => `
      <div class="booking-cat-card" style="margin-bottom:12px; border: 1.5px solid #F0E0CC; border-radius: 12px; overflow:hidden;">
        <div class="booking-cat-header" style="background:#F9F0E8; padding: 16px; display:flex; justify-content:space-between; align-items:center; cursor:pointer;" tabindex="0" role="button">
          <div>
            <strong style="color:#6B4C35; font-size:1.1rem; font-family:'Playfair Display', serif;">${c.icon||'💅'} ${c.name}</strong><br>
            <small style="color:#C9A84C;">${c.startingPrice||''}</small>
          </div>
          <div class="cat-toggle" style="color:#C9A84C; transition: transform 0.3s;">▼</div>
        </div>
        <div class="booking-cat-body" style="display:none; padding: 8px;">
          ${!c.services || !c.services.length ? '<p style="padding:8px; color:#a38b76; font-size:0.9rem;">Nenhum serviço.</p>' : c.services.map(s => `
            <div class="servico-option" data-id="${s.id}" data-cat-id="${c.id}" role="button" tabindex="0" aria-label="Selecionar ${s.name}">
              <div class="servico-option-name">${s.name}</div>
              <div class="servico-option-price">${s.price}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    $$('.booking-cat-header').forEach(header => {
      const toggleFunc = () => {
        const body = header.nextElementSibling;
        const toggle = header.querySelector('.cat-toggle');
        const isVisible = body.style.display === 'block';
        $$('.booking-cat-body').forEach(b => b.style.display = 'none');
        $$('.booking-cat-header .cat-toggle').forEach(t => t.style.transform = 'rotate(0deg)');
        if (!isVisible) {
          body.style.display = 'block';
          toggle.style.transform = 'rotate(180deg)';
        }
      };
      header.addEventListener('click', toggleFunc);
      header.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFunc(); } });
    });

    $$('.servico-option').forEach(opt => {
      const select = () => {
        $$('.servico-option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        
        const catId = opt.dataset.catId;
        const srvId = opt.dataset.id;
        const cat = cats.find(c => c.id === catId);
        booking.service = cat?.services.find(s => s.id === srvId);
        
        $('#next-step-1').disabled = false;
      };
      opt.addEventListener('click', select);
      opt.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(); } });
    });
  }

  $('#next-step-1')?.addEventListener('click', () => goToStep(2));
  $('#prev-step-2')?.addEventListener('click', () => goToStep(1));
  $('#next-step-2')?.addEventListener('click', () => {
    goToStep(3);
    renderTimeSlots();
  });
  $('#prev-step-3')?.addEventListener('click', () => goToStep(2));
  $('#next-step-3')?.addEventListener('click', () => {
    goToStep(4);
    renderSummary();
  });
  $('#prev-step-4')?.addEventListener('click', () => goToStep(3));

  // ── CALENDAR ──
  function renderCalendar() {
    const title = $('#calendar-title');
    const daysContainer = $('#calendar-days');
    if (!title || !daysContainer) return;

    const months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    title.textContent = `${months[calMonth]} de ${calYear}`;

    const today = new Date();
    today.setHours(0,0,0,0);
    const firstDay = new Date(calYear, calMonth, 1).getDay();
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(calYear, calMonth, 0).getDate();

    let html = '';

    // Prev month days
    for (let i = firstDay - 1; i >= 0; i--) {
      html += `<div class="cal-day other-month">${daysInPrevMonth - i}</div>`;
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(calYear, calMonth, d);
      const dateStr = formatDate(date);
      const isPast = date < today;
      const dayOfWeek = date.getDay();
      const isBusinessDay = BUSINESS_HOURS.days.includes(dayOfWeek);
      const isSelected = booking.date === dateStr;
      const hasApts = getAppointments().some(a => a.date === dateStr);

      let classes = 'cal-day';
      if (isPast || !isBusinessDay) classes += ' disabled';
      if (date.toDateString() === today.toDateString()) classes += ' today';
      if (isSelected) classes += ' selected';
      if (hasApts && !isPast) classes += ' has-bookings';

      html += `<div class="${classes}" data-date="${dateStr}" ${isPast || !isBusinessDay ? '' : 'tabindex="0"'}>${d}</div>`;
    }

    // Fill remaining
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
    let nextDay = 1;
    for (let i = firstDay + daysInMonth; i < totalCells; i++) {
      html += `<div class="cal-day other-month">${nextDay++}</div>`;
    }

    daysContainer.innerHTML = html;

    $$('.cal-day:not(.disabled):not(.other-month)').forEach(day => {
      const select = () => {
        $$('.cal-day').forEach(d => d.classList.remove('selected'));
        day.classList.add('selected');
        booking.date = day.dataset.date;
        $('#next-step-2').disabled = false;
      };
      day.addEventListener('click', select);
      day.addEventListener('keydown', e => { if (e.key === 'Enter') select(); });
    });
  }

  $('#prev-month')?.addEventListener('click', () => {
    calMonth--;
    if (calMonth < 0) { calMonth = 11; calYear--; }
    renderCalendar();
  });
  $('#next-month')?.addEventListener('click', () => {
    calMonth++;
    if (calMonth > 11) { calMonth = 0; calYear++; }
    renderCalendar();
  });

  renderCalendar();

  // ── TIME SLOTS ──
  function renderTimeSlots() {
    const container = $('#horarios-grid');
    if (!container || !booking.date) return;

    const date = new Date(booking.date + 'T12:00:00');
    const dayOfWeek = date.getDay();
    const isSat = dayOfWeek === 6;
    const end = isSat ? BUSINESS_HOURS.satEnd : BUSINESS_HOURS.end;

    const duration = booking.service?.duration || BUSINESS_HOURS.interval || 60;
    const intervalMins = duration <= 30 ? 30 : 60;

    const slots = [];
    for (let h = BUSINESS_HOURS.start; h < end; h++) {
      // Skip lunch
      if (h >= BUSINESS_HOURS.lunchStart && h < BUSINESS_HOURS.lunchEnd) continue;
      slots.push(`${String(h).padStart(2,'0')}:00`);
      if (intervalMins === 30) {
        if (!(h + 0.5 >= BUSINESS_HOURS.lunchStart && h + 0.5 < BUSINESS_HOURS.lunchEnd)) {
          slots.push(`${String(h).padStart(2,'0')}:30`);
        }
      }
    }

    container.innerHTML = slots.map(slot => {
      const occupied = isTimeOccupied(booking.date, slot);
      return `
        <button type="button" class="horario-btn${occupied ? ' occupied' : ''}" 
          data-time="${slot}" ${occupied ? 'disabled aria-disabled="true"' : 'aria-label="Selecionar horário ' + slot + '"'}>
          ${slot}${occupied ? '<br><small>Ocupado</small>' : ''}
        </button>
      `;
    }).join('');

    $$('.horario-btn:not(.occupied)').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.horario-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        booking.time = btn.dataset.time;
        $('#next-step-3').disabled = false;
      });
    });
  }

  // ── SUMMARY ──
  function renderSummary() {
    const summary = $('#booking-summary');
    if (!summary) return;
    const dateFormatted = booking.date ? formatDateDisplay(booking.date) : '-';
    summary.innerHTML = `
      <h4>Resumo do Agendamento</h4>
      <div class="summary-line"><span>Serviço</span><strong>${booking.service?.name || '-'}</strong></div>
      <div class="summary-line"><span>Valor</span><strong>${booking.service?.price || '-'}</strong></div>
      <div class="summary-line"><span>Data</span><strong>${dateFormatted}</strong></div>
      <div class="summary-line"><span>Horário</span><strong>${booking.time || '-'}</strong></div>
    `;
  }

  // ── FORM SUBMIT ──
  const form = $('#booking-form');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const nome = $('#cliente-nome')?.value.trim();
    const whatsapp = $('#cliente-whatsapp')?.value.trim();
    const email = $('#cliente-email')?.value.trim();
    const obs = $('#cliente-obs')?.value.trim();
    let valid = true;

    if (!nome) {
      $('#error-nome').textContent = 'Por favor, informe seu nome.';
      valid = false;
    } else { $('#error-nome').textContent = ''; }

    if (!whatsapp || whatsapp.replace(/\D/g,'').length < 10) {
      $('#error-whatsapp').textContent = 'Por favor, informe um WhatsApp válido.';
      valid = false;
    } else { $('#error-whatsapp').textContent = ''; }

    if (!valid) return;

    // Re-check availability
    if (isTimeOccupied(booking.date, booking.time)) {
      alert('⚠️ Este horário acabou de ser reservado por outra cliente. Por favor, escolha outro horário.');
      goToStep(3);
      renderTimeSlots();
      return;
    }

    const appointment = {
      id: Date.now().toString(),
      service: booking.service?.name,
      serviceId: booking.service?.id,
      price: booking.service?.price,
      date: booking.date,
      time: booking.time,
      client: { nome, whatsapp, email, obs },
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };

    const saved = saveAppointment(appointment);
    if (!saved) {
      alert('⚠️ Este horário já estava ocupado. Por favor, escolha outro.');
      goToStep(3);
      renderTimeSlots();
      return;
    }

    // Success
    const modal = $('#success-modal');
    const modalMsg = $('#modal-message');
    const waLink = $('#whatsapp-confirm');

    const dateDisplay = formatDateDisplay(booking.date);
    modalMsg.textContent = `✅ ${nome}, seu horário foi reservado para ${dateDisplay} às ${booking.time} — ${booking.service?.name}.`;

    const waText = encodeURIComponent(`Olá Thayna! Acabei de agendar meu horário pelo site:\n\n📋 *${booking.service?.name}*\n📅 ${dateDisplay} às ${booking.time}\n\nMeu nome: ${nome}\nWhatsApp: ${whatsapp}`);
    waLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

    modal.classList.add('active');
    form.reset();

    // Reset booking state
    booking = { service: null, date: null, time: null };
    goToStep(1);
    $$('.servico-option').forEach(o => o.classList.remove('selected'));
    $$('.cal-day').forEach(d => d.classList.remove('selected'));
    $('#next-step-1').disabled = true;
    $('#next-step-2').disabled = true;
    $('#next-step-3').disabled = true;
    renderCalendar();
  });

  // ── PHONE MASK ──
  $('#cliente-whatsapp')?.addEventListener('input', function() {
    let v = this.value.replace(/\D/g,'');
    if (v.length > 11) v = v.slice(0,11);
    if (v.length > 7) v = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
    else if (v.length > 2) v = `(${v.slice(0,2)}) ${v.slice(2)}`;
    else if (v.length > 0) v = `(${v}`;
    this.value = v;
  });
}

// ─── FOOTER YEAR ─────────────────────────────────────────────
function initFooter() {
  const el = $('#year');
  if (el) el.textContent = new Date().getFullYear();
}

// ─── HELPERS ─────────────────────────────────────────────────
function formatDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}

function formatDateDisplay(dateStr) {
  if (!dateStr) return '';
  const [y,m,d] = dateStr.split('-');
  const months = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
  const days = ['domingo','segunda','terça','quarta','quinta','sexta','sábado'];
  const date = new Date(`${dateStr}T12:00:00`);
  return `${days[date.getDay()]}, ${d} de ${months[parseInt(m)-1]} de ${y}`;
}
