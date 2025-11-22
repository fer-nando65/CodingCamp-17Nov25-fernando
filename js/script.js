(() => {
  let name = "Fernando";
  let username = document.querySelector("#username");
  username.textContent = name;
  function updateTime() {
    const el = document.getElementById("currentTime");
    const now = new Date();
    el.textContent = "Current time: " + now.toString();
  }
  updateTime();
  setInterval(updateTime, 1000);

  const form = document.getElementById("contactForm");
  const preview = {
    name: document.getElementById("p_name"),
    dob: document.getElementById("p_dob"),
    gender: document.getElementById("p_gender"),
    message: document.getElementById("p_message"),
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get("name") || "";
    const dob = fd.get("dob") || "";
    const gender = fd.get("gender") || "";
    const message = fd.get("message") || "";

    preview.name.textContent = name;
    preview.dob.textContent = dob;
    preview.gender.textContent = gender;
    preview.message.textContent = message;

    const card = form.closest(".contact-card");
    card.animate(
      [
        { boxShadow: "0 2px 8px rgba(12,16,30,0.02)" },
        { boxShadow: "0 12px 36px rgba(12,16,30,0.08)" },
        { boxShadow: "0 2px 8px rgba(12,16,30,0.02)" },
      ],
      { duration: 600 }
    );
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    form.reset();
    preview.name.textContent = "";
    preview.dob.textContent = "";
    preview.gender.textContent = "";
    preview.message.textContent = "";
  });

  document.querySelector(".logo").addEventListener("click", () => {
    document.getElementById("name").value = "Harfi Novian";
    document.getElementById("dob").value = "1995-01-11";
    document.querySelector(
      'input[name=gender][value="Laki-Laki"]'
    ).checked = true;
    document.getElementById("message").value = "Lagi Belajar buat Website";
    form.dispatchEvent(new Event("submit", { cancelable: true }));
  });

  const goTopBtn = document.getElementById("goTop");
  window.addEventListener("scroll", () => {
    goTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });
  goTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetID = this.getAttribute("href");
      const targetSection = document.querySelector(targetID);

      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  function startPartnerSlider() {
    const track = document.querySelector(".slide-track");
    const partnerItems = document.querySelectorAll(".slide-track img");

    partnerItems.forEach((img) => {
      const clone = img.cloneNode(true);
      track.appendChild(clone);
    });

    let position = 0;
    const speed = 0.5;

    function animate() {
      position -= speed;
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }

  window.addEventListener("load", startPartnerSlider);
})();
