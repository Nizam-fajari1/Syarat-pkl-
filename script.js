// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

  link.addEventListener("click", function (e) {

    const targetId = this.getAttribute("href");

    if (targetId === "#") {
      e.preventDefault();
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      if (targetId === "#certificates") {

        const certList = document.getElementById("certificate-list");
        const certToggleBtn = document.getElementById("toggle-certificates");

        if (certList && !certList.classList.contains("open")) {

          certList.classList.add("open");
          certToggleBtn.classList.add("open");

          certToggleBtn.innerHTML =
            'Sembunyikan Sertifikat <i class="fa-solid fa-chevron-down"></i>';

        }

      }
    }

  });

});



const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Tolong isi semua bagian terlebih dahulu.");
      return;
    }

    // Nomor WhatsApp kamu
    const whatsappNumber = "6287816109438";

    const whatsappMessage =
      "Halo Muhammad Nizam Fajari 👋\n\n" +
      "Nama: " + name + "\n" +
      "Email: " + email + "\n\n" +
      "Pesan:\n" +
      message;

    const whatsappURL =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
  });
}

// ===============================
// TOGGLE SERTIFIKAT
// ===============================

const toggleCertificatesBtn = document.getElementById("toggle-certificates");
const certificateList = document.getElementById("certificate-list");

if (toggleCertificatesBtn && certificateList) {

  toggleCertificatesBtn.addEventListener("click", function () {

    const isOpen = certificateList.classList.toggle("open");

    toggleCertificatesBtn.classList.toggle("open", isOpen);

    toggleCertificatesBtn.innerHTML = isOpen
      ? 'Sembunyikan Sertifikat <i class="fa-solid fa-chevron-down"></i>'
      : 'Lihat Sertifikat <i class="fa-solid fa-chevron-down"></i>';

    if (isOpen) {
      certificateList.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

  });

}


// ===============================
// REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
  "section, .project-card, .certificate-card, .skill-card"
);

const revealObserver = new IntersectionObserver(
  function (entries, observer) {

    entries.forEach(function (entry) {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach(function (element) {

  element.classList.add("reveal");

  revealObserver.observe(element);

});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", function () {

  let currentSection = "";

  sections.forEach(function (section) {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }

  });


  navLinks.forEach(function (link) {

    link.classList.remove("active");

    if (
      link.getAttribute("href") === "#" + currentSection
    ) {
      link.classList.add("active");
    }

  });

});


// ===============================
// CURRENT YEAR
// ===============================

const footer = document.querySelector("footer");

if (footer) {

  footer.innerHTML = footer.innerHTML.replace(
    "2026",
    new Date().getFullYear()
  );

}