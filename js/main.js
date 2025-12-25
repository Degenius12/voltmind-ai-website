/**
 * VoltMind AI Website - Main JavaScript
 * Professional B2B website interactions and form handling
 */

// =============================================================================
// MOBILE MENU TOGGLE
// =============================================================================
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.header__mobile-toggle');
  const nav = document.querySelector('.header__nav');

  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', function() {
      nav.classList.toggle('active');

      // Animate hamburger icon
      const spans = this.querySelectorAll('span');
      if (nav.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(7px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.header__nav') && !e.target.closest('.header__mobile-toggle')) {
        nav.classList.remove('active');
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }
});

// =============================================================================
// FORM VALIDATION AND SUBMISSION
// =============================================================================

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Phone validation (basic)
function isValidPhone(phone) {
  const phoneRegex = /^[\d\s\-\(\)]+$/;
  return phone === '' || phoneRegex.test(phone);
}

// Show form message
function showFormMessage(formId, message, type) {
  const messageDiv = document.getElementById('formMessage');
  if (!messageDiv) return;

  messageDiv.textContent = message;
  messageDiv.style.display = 'block';

  if (type === 'success') {
    messageDiv.className = 'form__success';
  } else {
    messageDiv.className = 'form__error';
  }

  // Scroll to message
  messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const formData = {
      firstname: document.getElementById('contact-firstname').value.trim(),
      lastname: document.getElementById('contact-lastname').value.trim(),
      email: document.getElementById('contact-email').value.trim(),
      phone: document.getElementById('contact-phone').value.trim(),
      company: document.getElementById('contact-company').value.trim(),
      industry: document.getElementById('contact-industry').value,
      interest: document.getElementById('contact-interest').value,
      budget: document.getElementById('contact-budget').value,
      message: document.getElementById('contact-message').value.trim(),
      privacy: document.getElementById('contact-privacy').checked
    };

    // Validation
    if (!isValidEmail(formData.email)) {
      showFormMessage('contactForm', 'Please enter a valid email address.', 'error');
      return;
    }

    if (!isValidPhone(formData.phone)) {
      showFormMessage('contactForm', 'Please enter a valid phone number.', 'error');
      return;
    }

    if (!formData.privacy) {
      showFormMessage('contactForm', 'Please agree to the privacy policy.', 'error');
      return;
    }

    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual API call)
    setTimeout(function() {
      console.log('Form submitted:', formData);

      showFormMessage('contactForm',
        'Thank you for your message! We\'ll get back to you within one business day.',
        'success'
      );

      // Reset form
      contactForm.reset();
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;

      // In production, replace the setTimeout with actual fetch/AJAX call:
      /*
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        showFormMessage('contactForm',
          'Thank you for your message! We\'ll get back to you within one business day.',
          'success'
        );
        contactForm.reset();
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
      })
      .catch(error => {
        showFormMessage('contactForm',
          'Sorry, there was an error sending your message. Please try again or email us directly.',
          'error'
        );
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
      });
      */
    }, 1500);
  });
}

// Lead Magnet Form Handler (Homepage)
const leadMagnetForm = document.getElementById('leadMagnetForm');
if (leadMagnetForm) {
  leadMagnetForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById('lead-name').value.trim(),
      email: document.getElementById('lead-email').value.trim(),
      company: document.getElementById('lead-company').value.trim(),
      employees: document.getElementById('lead-employees').value,
      privacy: document.getElementById('lead-privacy').checked
    };

    // Validation
    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!formData.privacy) {
      alert('Please agree to receive the AI Readiness Assessment.');
      return;
    }

    // Show loading state
    const submitBtn = leadMagnetForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(function() {
      console.log('Lead magnet form submitted:', formData);

      alert('Success! Check your email for the AI Readiness Assessment. It should arrive within 5 minutes.');

      // Reset form
      leadMagnetForm.reset();
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;

      // In production, replace with actual API call
    }, 1500);
  });
}

// Newsletter Subscription Handler (Footer & Resources page)
function subscribeNewsletter() {
  const emailInput = document.getElementById('footerEmail');
  if (!emailInput) return;

  const email = emailInput.value.trim();

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  console.log('Newsletter subscription:', email);
  alert('Thank you for subscribing! You\'ll receive our next newsletter soon.');
  emailInput.value = '';

  // In production, replace with actual API call
  /*
  fetch('/api/newsletter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email })
  })
  .then(response => response.json())
  .then(data => {
    alert('Thank you for subscribing! You\'ll receive our next newsletter soon.');
    emailInput.value = '';
  })
  .catch(error => {
    alert('Sorry, there was an error. Please try again.');
  });
  */
}

// Newsletter form on Resources page
const newsletterForm = document.querySelector('#newsletter-email')?.closest('form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById('newsletter-name').value.trim(),
      email: document.getElementById('newsletter-email').value.trim(),
      privacy: document.getElementById('newsletter-privacy').checked
    };

    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!formData.privacy) {
      alert('Please agree to receive the newsletter.');
      return;
    }

    const submitBtn = newsletterForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Subscribing...';
    submitBtn.disabled = true;

    setTimeout(function() {
      console.log('Newsletter subscription:', formData);
      alert('Welcome! You\'ve been subscribed to our newsletter.');
      newsletterForm.reset();
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    }, 1500);
  });
}

// =============================================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// =============================================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    // Skip if it's just "#"
    if (href === '#') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();

      // Close mobile menu if open
      const nav = document.querySelector('.header__nav');
      if (nav && nav.classList.contains('active')) {
        nav.classList.remove('active');
      }

      // Scroll to target
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// =============================================================================
// ACTIVE NAV LINK HIGHLIGHTING
// =============================================================================
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.header__nav-link');

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage ||
        (currentPage === '' && linkPage === 'index.html') ||
        (currentPage === '/' && linkPage === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Set active link on page load
document.addEventListener('DOMContentLoaded', setActiveNavLink);

// =============================================================================
// SCROLL TO TOP BUTTON (Optional Enhancement)
// =============================================================================
let scrollTopBtn;

function createScrollTopButton() {
  scrollTopBtn = document.createElement('button');
  scrollTopBtn.innerHTML = '↑';
  scrollTopBtn.className = 'scroll-top-btn';
  scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
  scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 32px;
    right: 32px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #2563EB;
    color: white;
    font-size: 24px;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  `;

  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  document.body.appendChild(scrollTopBtn);
}

function toggleScrollTopButton() {
  if (!scrollTopBtn) return;

  if (window.pageYOffset > 500) {
    scrollTopBtn.style.opacity = '1';
    scrollTopBtn.style.visibility = 'visible';
  } else {
    scrollTopBtn.style.opacity = '0';
    scrollTopBtn.style.visibility = 'hidden';
  }
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', function() {
  createScrollTopButton();
  window.addEventListener('scroll', toggleScrollTopButton);
});

// =============================================================================
// ANALYTICS & TRACKING (Placeholder)
// =============================================================================

// Google Analytics placeholder
// Replace with your actual Google Analytics tracking code
function initAnalytics() {
  // Example Google Analytics initialization
  /*
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
  */

  console.log('Analytics initialized (placeholder)');
}

// Track form submissions
function trackFormSubmission(formName) {
  console.log('Form submission tracked:', formName);

  // Example Google Analytics event tracking
  /*
  if (typeof gtag === 'function') {
    gtag('event', 'form_submission', {
      'event_category': 'engagement',
      'event_label': formName
    });
  }
  */
}

// Track button clicks
function trackButtonClick(buttonName) {
  console.log('Button click tracked:', buttonName);

  // Example tracking
  /*
  if (typeof gtag === 'function') {
    gtag('event', 'button_click', {
      'event_category': 'engagement',
      'event_label': buttonName
    });
  }
  */
}

// Initialize analytics on page load
document.addEventListener('DOMContentLoaded', initAnalytics);

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Format phone number (US format)
function formatPhoneNumber(value) {
  const phoneNumber = value.replace(/\D/g, '');
  const match = phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return value;
}

// Auto-format phone inputs
document.addEventListener('DOMContentLoaded', function() {
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach(input => {
    input.addEventListener('blur', function() {
      if (this.value) {
        this.value = formatPhoneNumber(this.value);
      }
    });
  });
});

// =============================================================================
// ACCESSIBILITY ENHANCEMENTS
// =============================================================================

// Trap focus in modal (if modals are added later)
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }

    if (e.key === 'Escape') {
      // Close modal or menu
      element.classList.remove('active');
    }
  });
}

// Skip to main content (accessibility)
document.addEventListener('DOMContentLoaded', function() {
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'skip-link';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #2563EB;
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
  `;

  skipLink.addEventListener('focus', function() {
    this.style.top = '0';
  });

  skipLink.addEventListener('blur', function() {
    this.style.top = '-40px';
  });

  document.body.insertBefore(skipLink, document.body.firstChild);
});

console.log('VoltMind AI - Website loaded successfully');