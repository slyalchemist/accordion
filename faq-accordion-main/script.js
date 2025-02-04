const div = document.querySelectorAll(".section");

div.forEach((child) => {
    // and for each one we add a 'click' listener
    child.addEventListener("click", () => {
      console.log("clicked!");

      let description = child.querySelector(".description");
      if (description.style.display === "block") {
        description.style.display = "none";
      } else {
        description.style.display = "block";
      }

      let sectionTitle = child.querySelector(".section-title");
      let symbol = sectionTitle.querySelector(".symbol");
      symbol.classList.toggle("minus");
    });
  });