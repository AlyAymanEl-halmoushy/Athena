document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       DARK / LIGHT MODE
    ========================= */

    const themeToggle =
        document.getElementById("themeToggle");

    const savedTheme =
        localStorage.getItem("athena-theme");


    if (savedTheme === "light") {

        document.body.classList.add("light");

        themeToggle.textContent = "🌙";
    }


    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light");


        if (
            document.body.classList.contains("light")
        ) {

            localStorage.setItem(
                "athena-theme",
                "light"
            );

            themeToggle.textContent = "🌙";

        } else {

            localStorage.setItem(
                "athena-theme",
                "dark"
            );

            themeToggle.textContent = "☀";
        }

    });


    /* =========================
       SCROLL REVEAL
    ========================= */

    const elements =
        document.querySelectorAll(
            ".info-card, .training-card, .benefit-item"
        );


    elements.forEach(element => {

        element.classList.add("reveal");

    });


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    elements.forEach(element => {

        observer.observe(element);

    });


    /* =========================
       JOIN BUTTON
    ========================= */

    const joinBtn =
        document.getElementById("joinBtn");


    if (joinBtn) {

        joinBtn.addEventListener("click", () => {

            window.location.href =
                "join.html";

        });

    }


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-links a[href^='#']"
        );


    window.addEventListener("scroll", () => {

        let current = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;


            if (
                window.scrollY >= sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    });


    /* =========================
       BUTTON ANIMATION
    ========================= */

    document
        .querySelectorAll(".hero-btn")
        .forEach(button => {

            button.addEventListener(
                "mouseenter",
                () => {

                    button.style.transform =
                        "translateY(-4px) scale(1.02)";

                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    button.style.transform =
                        "translateY(0) scale(1)";

                }
            );

        });

});