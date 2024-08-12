document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll(".step h2");

    steps.forEach(step => {
        step.addEventListener("click", function() {
            const substeps = this.nextElementSibling;
            if (substeps.style.display === "block") {
                substeps.style.display = "none";
            } else {
                substeps.style.display = "block";
            }
        });
    });
});
