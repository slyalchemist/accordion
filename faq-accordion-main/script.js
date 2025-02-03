const div = document.querySelectorAll(".section");

div.forEach((child) => {
    // and for each one we add a 'click' listener
    child.addEventListener("click", () => {
      console.log("clicked!");
      child.classList.toggle("open");

      let description = child.querySelector(".description");
      if (description.style.display === "block") {
        description.style.display = "none";
      } else {
        description.style.display = "block";
      }
    });
  });