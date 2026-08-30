document.addEventListener("DOMContentLoaded", () => {

    /* ========================================
       CURRENT YEAR
    ======================================== */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const careerTimeline = document.querySelector("[data-career-start-year]");

    if (careerTimeline) {
        const startYear = Number(careerTimeline.dataset.careerStartYear);
        const currentYear = new Date().getFullYear();
        const careerYears = Math.max(1, currentYear - startYear);

        document.querySelectorAll("[data-career-years]").forEach((element) => {
            element.textContent = `${careerYears}+`;
        });

        document.querySelectorAll("[data-career-end-year]").forEach((element) => {
            element.textContent = currentYear;
        });

        careerTimeline.setAttribute(
            "aria-label",
            `Career progression from ${startYear} to ${currentYear}`
        );
    }


    /* ========================================
       SMOOTH INTERNAL NAVIGATION
    ======================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

});