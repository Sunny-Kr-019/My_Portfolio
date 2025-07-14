/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
}
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
  reset: true,
});
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 300 });
sr.reveal('.skills__data, .work__img', { interval: 200 });

// Toggle menu on hamburger click
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Close menu when X button clicked
const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('active');
});

// Close menu after clicking any nav link
const navLinkk = document.querySelectorAll('.nav__link');

navLinkk.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


/*===== CONTACT FORM SUBMIT =====*/
const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');
if (form && message) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
    })
      .then(response => {
        if (response.ok) {
          message.style.display = 'block';
          form.reset();
        } else {
          alert('Something went wrong. Try again.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error sending message.');
      });
  });
}

/* ===== PROJECT MODAL (POPUP) ===== */
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalImage = document.getElementById('modalImage');
const modalTags = document.getElementById('modalTags');
const modalCloseBtn = document.getElementById('modalCloseBtn');

const viewCodeBtn = document.getElementById('viewCodeBtn');
const viewLiveBtn = document.getElementById('viewLiveBtn');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h3')?.textContent;
    const shortDesc = card.querySelector('p')?.textContent;
    const fullDesc = card.getAttribute('data-full-desc');
    const img = card.querySelector('img')?.getAttribute('src');
    const tags = card.querySelectorAll('.project-tags span');

    modalTitle.textContent = title || "No Title";

    // Show full description in popup, else short description
    modalDesc.textContent = fullDesc || shortDesc || "No Description";

    modalImage.src = img || "";
    modalImage.alt = title || "";

    modalTags.innerHTML = '';
    tags.forEach(tag => {
      const span = document.createElement('span');
      span.textContent = tag.textContent;
      span.className = 'project-tag';
      span.style.cssText = 'background-color: var(--first-color); color: white; padding: 0.3rem 0.6rem; border-radius: 8px; font-size: 0.85rem; margin: 3px;';
      modalTags.appendChild(span);
    });

    // Set links for buttons dynamically
    if (title === "Amazon Clone") {
      viewCodeBtn.href = "https://github.com/Sunny-Kr-019/Amazon-Clone";
      viewLiveBtn.href = "https://shopzone-clone.netlify.app/";
    } else if (title === "Bat-Ball-Stump Game") {
      viewCodeBtn.href = "https://github.com/Sunny-Kr-019/BAT-BALL-STUMP-GAME";
      viewLiveBtn.href = "https://play-bbs-game.netlify.app/";
    } else if (title === "Simon Says Game") {
      viewCodeBtn.href = "https://github.com/Sunny-Kr-019/Simon-Says-Games";
      viewLiveBtn.href = "https://memory-taps.netlify.app/";
    } else if (title === "Portfolio Website") {
      viewCodeBtn.href = "https://github.com/your-username/portfolio";
      viewLiveBtn.href = "https://sunny-kr-019.netlify.app/";
    } else if (title === "Carnatic Ragas Identification") {
      viewCodeBtn.href = "https://github.com/your-username/carnatic-ragas";
      viewLiveBtn.href = "#";
    } else if (title === "WanderLust") {
      viewCodeBtn.href = "https://github.com/your-username/wanderlust";
      viewLiveBtn.href = "https://wanderlust-live-link.netlify.app";
    } else {
      viewCodeBtn.href = "#";
      viewLiveBtn.href = "#";
    }

    modal.classList.add('active');
  });
});

modalCloseBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});
