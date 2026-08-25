document.addEventListener("DOMContentLoaded", () => {

    /* ================= THEME ================= */

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    const savedTheme = localStorage.getItem("athenaTheme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");

        if (themeIcon) {
            themeIcon.textContent = "☾";
        }
    } else {
        if (themeIcon) {
            themeIcon.textContent = "☀";
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("light-mode");

            const isLight =
                document.body.classList.contains("light-mode");

            localStorage.setItem(
                "athenaTheme",
                isLight ? "light" : "dark"
            );

            if (themeIcon) {
                themeIcon.textContent =
                    isLight ? "☾" : "☀";
            }
        });
    }


    /* ================= NAVBAR ================= */

    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.style.background =
                "rgba(5, 5, 5, 0.96)";
        } else {
            navbar.style.background =
                "rgba(5, 5, 5, 0.88)";
        }

        if (document.body.classList.contains("light-mode")) {

            if (window.scrollY > 50) {
                navbar.style.background =
                    "rgba(255,255,255,0.98)";
            } else {
                navbar.style.background =
                    "rgba(255,255,255,0.94)";
            }
        }
    });


    /* ================= REVEAL ANIMATION ================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    /* ================= SMOOTH SCROLL ================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener("click", (event) => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
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


    /* ================= BUTTON RIPPLE ================= */

    const buttons =
        document.querySelectorAll(".btn");

    buttons.forEach((button) => {

        button.addEventListener("click", function (event) {

            const ripple =
                document.createElement("span");

            ripple.style.position = "absolute";
            ripple.style.width = "10px";
            ripple.style.height = "10px";
            ripple.style.borderRadius = "50%";
            ripple.style.background =
                "rgba(255,255,255,0.35)";
            ripple.style.transform =
                "translate(-50%, -50%)";
            ripple.style.pointerEvents = "none";

            const rect =
                this.getBoundingClientRect();

            ripple.style.left =
                `${event.clientX - rect.left}px`;

            ripple.style.top =
                `${event.clientY - rect.top}px`;

            this.style.position = "relative";
            this.style.overflow = "hidden";

            this.appendChild(ripple);

            ripple.animate(
                [
                    {
                        width: "10px",
                        height: "10px",
                        opacity: 0.7
                    },
                    {
                        width: "250px",
                        height: "250px",
                        opacity: 0
                    }
                ],
                {
                    duration: 550,
                    easing: "ease-out"
                }
            );

            setTimeout(() => {
                ripple.remove();
            }, 600);

        });

    });


    /* ================= SPORT CARD EFFECT ================= */

    const cards =
        document.querySelectorAll(".sport-info-card");

    cards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateX =
                ((y / rect.height) - 0.5) * -5;

            const rotateY =
                ((x / rect.width) - 0.5) * 5;

            card.style.transform =
                `translateY(-8px)
                 perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0)";

        });

    });


    /* ================= PARALLAX HERO ================= */

    const hero =
        document.querySelector(".boxing-page");

    if (hero) {

        window.addEventListener("scroll", () => {

            const scroll =
                window.scrollY;

            if (scroll < window.innerHeight) {

                hero.style.backgroundPosition =
                    `center ${scroll * 0.25}px`;

            }

        });

    }


    /* ================= KEYBOARD ================= */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    });

});