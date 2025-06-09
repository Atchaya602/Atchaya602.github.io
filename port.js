function enterSite() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
    showSection("about");
  }
  
  function showSection(sectionId) {
    document.querySelectorAll(".section").forEach((section) => {
      section.classList.remove("active");
    });
  
    document.getElementById(sectionId).classList.add("active");
  
    document.querySelectorAll("#navbar button").forEach((btn) => {
      btn.classList.remove("active");
      if (btn.dataset.section === sectionId) {
        btn.classList.add("active");
      }
    });
  }
  
  document.querySelectorAll("#navbar button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.section;
      showSection(target);
    });
  });
  