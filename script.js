const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const header = document.getElementById("header");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 90) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("load", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);

const counters = document.querySelectorAll("[data-count]");
let countersStarted = false;

function animateCounters() {
  const metrics = document.querySelector(".metrics");
  if (!metrics) return;

  const metricsTop = metrics.getBoundingClientRect().top;

  if (metricsTop < window.innerHeight - 80 && !countersStarted) {
    countersStarted = true;

    counters.forEach((counter) => {
      const target = Number(counter.dataset.count);
      let current = target > 100 ? target - 35 : 0;
      const increment = target > 100 ? 1 : target / 55;

      function update() {
        current += increment;

        if (current < target) {
          counter.textContent = formatCounter(Math.floor(current), target);
          requestAnimationFrame(update);
        } else {
          counter.textContent = formatCounter(target, target);
        }
      }

      update();
    });
  }
}

function formatCounter(value, target) {
  if (target === 2025) return "2025+";
  if (target === 2028) return "2028";
  return `${value}+`;
}

window.addEventListener("load", animateCounters);
window.addEventListener("scroll", animateCounters);
