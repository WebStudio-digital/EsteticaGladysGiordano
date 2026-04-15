
  const accordions = document.querySelectorAll(".accordion-header");

  accordions.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;

      content.classList.toggle("active");

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });



document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  // Mostrar primer slide
  showSlide(current);

  // Cambiar cada 5 segundos
  setInterval(nextSlide, 5000);
});
const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/maqaqokw", {
      method: "POST",
      body: data,
      headers: {
        "Accept": "application/json"
      }
    });

    if (response.ok) {
      form.reset();
      window.location.href = "./gracias.html";
    } else {
      alert("Error al enviar");
    }
  });
}