const sections = document.querySelectorAll(".section-title");
let i;

for(i = 0; i < sections.length; i++){
    sections[i].addEventListener("click", () => {
        this.classList.toggle("active");

        let description = this.nextElementSibling;
        if(description.style.display === "block"){
            description.style.display = "none";
        }
        else{
            description.style.display = "block";
        }
    });
}