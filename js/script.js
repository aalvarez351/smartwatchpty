// SmartWatch PTY — script.js
// Convertido de jQuery a vanilla JS (jQuery 1.11.0 eliminado — Bootstrap 5 no lo requiere)

"use strict";

// Busqueda popup: abrir y cerrar
function searchPopup() {
  var headerNav = document.getElementById('header-nav');

  if (headerNav) {
    headerNav.addEventListener('click', function(e) {
      if (e.target.closest('.search-button')) {
        var popup = document.querySelector('.search-popup');
        if (popup) popup.classList.toggle('is-visible');
      }
      if (e.target.closest('.btn-close-search')) {
        var popup = document.querySelector('.search-popup');
        if (popup) popup.classList.toggle('is-visible');
      }
    });
  }

  var triggers = document.querySelectorAll('.search-popup-trigger');
  triggers.forEach(function(trigger) {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      var popup = document.querySelector('.search-popup');
      if (popup) {
        popup.classList.add('is-visible');
        setTimeout(function() {
          var input = popup.querySelector('#search-popup');
          if (input) input.focus();
        }, 350);
      }
    });
  });

  var popup = document.querySelector('.search-popup');
  if (popup) {
    popup.addEventListener('click', function(e) {
      var t = e.target;
      if (
        t.classList.contains('search-popup-close') ||
        t.closest('.search-popup-close') ||
        t === popup
      ) {
        e.preventDefault();
        popup.classList.remove('is-visible');
      }
    });
  }

  document.addEventListener('keyup', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      var popup = document.querySelector('.search-popup');
      if (popup) popup.classList.remove('is-visible');
    }
  });
}

// Cantidad de productos (pagina single product)
function initProductQty() {
  var products = document.querySelectorAll('.product-qty');
  products.forEach(function(el) {
    var plusBtn = el.querySelector('.quantity-right-plus');
    var minusBtn = el.querySelector('.quantity-left-minus');
    var qtyInput = el.querySelector('#quantity');

    if (plusBtn && qtyInput) {
      plusBtn.addEventListener('click', function(e) {
        e.preventDefault();
        qtyInput.value = parseInt(qtyInput.value) + 1;
      });
    }

    if (minusBtn && qtyInput) {
      minusBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var current = parseInt(qtyInput.value);
        if (current > 0) {
          qtyInput.value = current - 1;
        }
      });
    }
  });
}

// GA4 — Tracking de clicks en WhatsApp
function initWhatsAppTracking() {
  document.querySelectorAll('a[href*="wa.me"]').forEach(function(el) {
    el.addEventListener('click', function() {
      var label = el.closest('.product-card')
        ? (el.closest('.card-detail')
            ? (el.closest('.card-detail').querySelector('.card-title a, .card-title') || el).textContent.trim()
            : 'Botón Comprar')
        : el.textContent.trim() || 'WhatsApp';

      if (typeof gtag === 'function') {
        gtag('event', 'click_whatsapp', {
          event_category: 'CTA',
          event_label: label.substring(0, 80),
          value: 1
        });
      }
    });
  });
}

// Inicializar todo cuando el DOM este listo
document.addEventListener('DOMContentLoaded', function() {

  searchPopup();
  initProductQty();
  initWhatsAppTracking();

  // Swiper hero / billboard
  if (document.querySelector('.main-swiper')) {
    new Swiper('.main-swiper', {
      speed: 500,
      navigation: {
        nextEl: '.swiper-arrow-prev',
        prevEl: '.swiper-arrow-next',
      },
    });
  }

  // Swiper productos moviles
  if (document.querySelector('.product-swiper')) {
    new Swiper('.product-swiper', {
      slidesPerView: 4,
      spaceBetween: 10,
      pagination: {
        el: '#mobile-products .swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        980: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }

  // Swiper smart watches
  if (document.querySelector('.product-watch-swiper')) {
    new Swiper('.product-watch-swiper', {
      slidesPerView: 4,
      spaceBetween: 10,
      pagination: {
        el: '#smart-watches .swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        980: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }

  // Swiper testimoniales
  if (document.querySelector('.testimonial-swiper')) {
    new Swiper('.testimonial-swiper', {
      loop: true,
      navigation: {
        nextEl: '.review-content .swiper-arrow-next',
        prevEl: '.review-content .swiper-arrow-prev',
      },
      pagination: {
        el: '.testimonial-swiper .swiper-pagination',
        clickable: true,
      },
    });
  }

}); // Fin DOMContentLoaded
