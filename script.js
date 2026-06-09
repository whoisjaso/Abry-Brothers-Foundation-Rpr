const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const form = document.querySelector("[data-inspection-form]");
const message = document.querySelector("[data-form-message]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
  });
}

if (form && message) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    message.textContent = "Thanks. Your inspection request has been received. Abry Brothers will contact you to confirm the details.";
    form.reset();
  });
}

const detailsCards = Array.from(document.querySelectorAll(".menu-card"));
const setMobileDetails = () => {
  const mobile = window.matchMedia("(max-width: 860px)").matches;
  detailsCards.forEach((card, index) => {
    if (mobile) {
      card.open = index === 0;
    } else {
      card.open = true;
    }
  });
};

setMobileDetails();
window.addEventListener("resize", setMobileDetails);

const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("is-visible"));
}
