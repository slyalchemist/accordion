const div = document.querySelectorAll(".section");

div.forEach((child) => {
    //for each section, add event listener
    child.addEventListener("click", () => {
      console.log("clicked!");

      //after event, make description visible
      let description = child.querySelector(".description");
      if (description.style.display === "block") {
        description.style.display = "none";
      } else {
        description.style.display = "block";
      }

      //target symbol, change to minus
      let sectionTitle = child.querySelector(".section-title");
      let symbol = sectionTitle.querySelector(".symbol");
      symbol.classList.toggle("minus");
    });
  });