document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // IMAGE SOURCES
    // =========================

     const images = {
        hero: "https://images.pexels.com/photos/4761799/pexels-photo-4761799.jpeg?auto=compress&cs=tinysrgb&w=1800",

        Boxing: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNy8XFoCnVuz-2F1tVwvueoy31E-FSPy-aQRAfyctTyQ&s=10",
        boxing: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Glsu17lw-9SsaUCYixSpMsIwq899ev5Uh6CTy7e869-2PHX6TqJD32k-8zpnVsHBh0vNiVJ403au1xDQ7KuCBtZW4D3dHlpX3yv92szT1O07zW45&s=10&ec=121966380",
        boxing_2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwZsAN76Pt8QoD0ZJQMdeKrtSqn3o_0nwgO2QpRqoqA&s=10",

        MMA: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVPhRFIr7GRz9XhCe0EqU0HKTFEBTBUK8njubbJVfpw&s=10",
        mma: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORYNdOyOvZHNav4X7S98c16lohp4CoPLM7NLTRMcQMw&s=10",
        mma_2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyfxD4FS0dW3WlRJlS-2N3uOnBhgQqx1qOoZXsizQ5Q&s=10",

        MuayThai: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShysPC8y0U7KFVnKeETEroT2RUnZPRpuZrMw7SDxYM5Q&s=10",
        muayThai: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByYBTUKqHGdLRxx6-GO1DRMrROn9YYG7svN0tFhjXtg&s=10",
        muayThai_2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEK95or8IUqtUPmW7g1rqkvAhDEKCjJUrbeoW6Kf8tbw&s=10",

        BJJ: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBgnFn9NQTXLqYADH-swfw7ClCfzcgYAYGl5G4ixZXcA&s=10",
        bjj: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxIzyJMQuslGPMYjjnF532FyUJeF9YagARzRRJcVrBeg&s=10",
        bjj_2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJ2-qG-ex7C8ubs2ezxzQHg-Kt05zvPFF_sjbaW5oUA&s=10",

        Wrestling: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8yOwvUuQOyPhUfP2wt9NUHLt7po0keVlEQ-AgOfPghw&s=10",
        wrestling: "https://i.ebayimg.com/00/s/MTYwMFgxMTMy/z/NsYAAOSwIQRlwKyu/$_57.JPG?set_id=880000500F",
        wrestling_2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jfs4W6PjiDk8uzn_WkN1Uq0qKFp34MC2mpEVaxv9gQ&s=10",

        Kickboxing: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7nIyPE8L95z1oGrmrG2u3F-sd4C17jBlhPmyIIUrug&s=10",
        kickboxing: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0BbySPAVoIzV_X7vhA-UYRrXdxREXKBOdGZBd3hy273-6TteWdcHMMkU&s=10",
        kickboxing_2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_0Ux79Ozis3P6sZNMavgibud17ZqdeoHdDNGjXl2_sQ&s=10",

        Judo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRySX88kvfuUx_CmUO4lHmxKmOIeOf1QM_sj5vs7n-xBw&s=10",
        judo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2Vnpx_UmCIUBX1VOIyFw8bOwJ5gSOXl6Yu1v85uGYw&s=10",
        judo_2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4icZgE8nZ-AwvruHGdjzoUQ2whUFnuby4Vj_l0zN9ZA&s=10",
        Karate: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU3roRHXN6o55hfSY1qAiA2e2kfpjfR7yCqAIZl_qAqw&s=10",
        karate: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4zbesxqiXsohcdcwcktT8ApzukrHSPh8OzMMLL_Xog&s=10",
        karate_2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoEnsTEacErIQ7V1ghEyjNSgMK4sdPtzfISh0RQzrZTw&s=10"
};


    // =========================
    // HERO BACKGROUND
    // =========================

    const hero = document.querySelector(".hero-bg");

    if (hero) {
        hero.style.backgroundImage = `
            linear-gradient(
                90deg,
                rgba(0,0,0,0.90),
                rgba(0,0,0,0.35)
            ),
            url("${images.hero}")
        `;
    }


    // =========================
    // DISCIPLINE IMAGES
    // =========================

    const disciplineImages = {
        boxing: images.Boxing,
        mma: images.MMA,
        "muay-thai": images.muayThai,
        bjj: images.BJJ,
        wrestling: images.Wrestling,
        kickboxing: images.Kickboxing,
        judo: images.Judo,
        karate: images.Karate
    };
    
    document.querySelectorAll(".discipline-card").forEach(card => {

        const sport = card.dataset.sport;
        const background = card.querySelector(".card-bg");

        if (background && disciplineImages[sport]) {

            background.style.backgroundImage =
                `url("${disciplineImages[sport]}")`;

        }

    });


    // =========================
    // FIGHTERS DATA
    // =========================

    const fighters = [
        {
            name: "mohamed aly klay",
            discipline: "Boxing",
            country: "USA",
            image: images.boxing
        },

        {
            name: "Conor McGregor",
            discipline: "MMA",
            country: "Ireland",
            image: images.mma
        },

        {
            name: "saenchai",
            discipline: "Muay Thai",
            country: "Thailand",
            image: images.muayThai_2
        },

        {
            name: "Roger Gracie",
            discipline: "BJJ",
            country: "Brazil",
            image: images.bjj_2
        },

        {
            name: "Ernesto Hoost",
            discipline: "Kickboxing",
            country: "Netherlands",
            image: images.kickboxing_2
        },

        {
            name: "Khabib Nurmagomedov",
            discipline: "MMA",
            country: "Russia",
            image: images.mma_2
        },

        {
            name: "Mike Tyson",
            discipline: "Boxing",
            country: "USA",
            image: images.boxing_2
        },

        {
            name: "Saenchai",
            discipline: "Muay Thai",
            country: "Thailand",
            image: images.muayThai
        }

    ];


    // =========================
    // FIGHTERS RENDER
    // =========================

    const fightersGrid =
        document.getElementById("fightersGrid");


    function renderFighters(filter = "all") {

        if (!fightersGrid) return;

        fightersGrid.innerHTML = "";


        const filteredFighters =
            filter === "all"
                ? fighters
                : fighters.filter(fighter => {

                    if (filter === "muay-thai") {
                        return fighter.discipline === "Muay Thai";
                    }

                    return (
                        fighter.discipline.toLowerCase()
                        === filter.toLowerCase()
                    );

                });


        filteredFighters.forEach(fighter => {

            const card =
                document.createElement("article");

            card.className =
                "fighter-card reveal";


            card.innerHTML = `

                <div
                    class="fighter-image"
                    style="
                        background-image:
                        linear-gradient(
                            to top,
                            rgba(0,0,0,0.90),
                            rgba(0,0,0,0.05)
                        ),
                        url('${fighter.image}');
                    "
                ></div>

                <div class="fighter-info">

                    <h3>
                        ${fighter.name}
                    </h3>

                    <p>
                        ${fighter.discipline}
                        ·
                        ${fighter.country}
                    </p>

                </div>

            `;


            fightersGrid.appendChild(card);

        });

    }


    renderFighters();


    // =========================
    // FIGHTER FILTER
    // =========================

    document
        .querySelectorAll(".filter-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                document
                    .querySelectorAll(".filter-btn")
                    .forEach(btn => {
                        btn.classList.remove("active");
                    });


                button.classList.add("active");


                const filter =
                    button.dataset.filter || "all";


                renderFighters(filter);

            });

        });


    // =========================
    // EVENTS
    // =========================

    const events = [

        {
            day: "12",
            month: "SEP",
            title: "ATHENA FIGHT NIGHT",
            location: "Cairo — Main Arena",
            type: "MMA & Boxing"
        },

        {
            day: "28",
            month: "SEP",
            title: "WARRIOR TRAINING CAMP",
            location: "ATHENA Academy",
            type: "Training Camp"
        },

        {
            day: "10",
            month: "OCT",
            title: "ATHENA COMBAT CHAMPIONSHIP",
            location: "Grand Arena",
            type: "Championship"
        }

    ];


    const eventsList =
        document.getElementById("eventsList");


    if (eventsList) {

        eventsList.innerHTML = "";


        events.forEach(event => {

            const card =
                document.createElement("article");

            card.className =
                "event-card reveal";


            card.innerHTML = `

                <div class="event-date">

                    <span class="day">
                        ${event.day}
                    </span>

                    <span class="month">
                        ${event.month}
                    </span>

                </div>


                <div class="event-info">

                    <h3>
                        ${event.title}
                    </h3>

                    <p>
                        ${event.location}
                        ·
                        ${event.type}
                    </p>

                </div>


                <button
                    class="btn btn-outline event-btn"
                    type="button"
                >
                    View Event
                </button>

            `;


            eventsList.appendChild(card);

        });

    }


    // =========================
    // NEWS IMAGES
    // =========================

    const newsImages = [
        images.mma,
        images.boxing,
        images.judo
    ];


    document
        .querySelectorAll(".news-image")
        .forEach((element, index) => {

            if (newsImages[index]) {

                element.style.backgroundImage = `
                    linear-gradient(
                        to top,
                        rgba(0,0,0,0.80),
                        rgba(0,0,0,0.05)
                    ),
                    url("${newsImages[index]}")
                `;

            }

        });


    // =========================
    // MOBILE MENU
    // =========================

    const hamburger =
        document.getElementById("hamburger");

    const navLinks =
        document.getElementById("navLinks");


    if (hamburger && navLinks) {

        hamburger.addEventListener("click", () => {

            navLinks.classList.toggle("open");

        });


        navLinks
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navLinks.classList.remove("open");

                });

            });

    }


    // =========================
    // SMOOTH SCROLL
    // =========================

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", event => {

                const id =
                    link.getAttribute("href");


                if (!id || id === "#") {
                    return;
                }


                const target =
                    document.querySelector(id);


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            });

        });


    // =========================
    // REVEAL ANIMATION
    // =========================

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target
                                .classList
                                .add("visible");

                            observer
                                .unobserve(entry.target);

                        }

                    });

                },
                {
                    threshold: 0.10
                }
            );


        revealElements.forEach(element => {

            observer.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("visible");

        });

    }


    // =========================
    // HERO COUNTERS
    // =========================

    const counters =
        document.querySelectorAll(".stat-number");


    counters.forEach(counter => {

        const target =
            Number(counter.dataset.count);


        if (!target) return;


        let current = 0;


        const increment =
            Math.max(
                1,
                Math.ceil(target / 60)
            );


        const updateCounter = () => {

            current += increment;


            if (current >= target) {

                counter.textContent =
                    target.toLocaleString();

                return;

            }


            counter.textContent =
                current.toLocaleString();


            requestAnimationFrame(
                updateCounter
            );

        };


        updateCounter();

    });


    // =========================
    // EVENT BUTTON
    // =========================

    document
        .querySelectorAll(".event-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                alert(
                    "ATHENA event details will be available soon."
                );

            });

        });


    // =========================
    // LOGIN
    // =========================

    const loginBtn =
        document.getElementById("loginBtn");


    if (loginBtn) {

        loginBtn.addEventListener("click", () => {

            alert(
                "ATHENA Sign In will be connected to the backend soon."
            );

        });

    }


    // =========================
    // REGISTER
    // =========================

    const registerBtn =
        document.getElementById("registerBtn");


    if (registerBtn) {

        registerBtn.addEventListener("click", () => {

            alert(
                "ATHENA Registration will be connected to the backend soon."
            );

        });

    }


    console.log(
        "ATHENA Combat Sports loaded successfully."
    );




        // =========================
    // DARK / LIGHT MODE
    // =========================

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    const savedTheme = localStorage.getItem("athena-theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");

        if (themeIcon) {
            themeIcon.textContent = "☾";
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("light-mode");

            const isLight =
                document.body.classList.contains("light-mode");

            localStorage.setItem(
                "athena-theme",
                isLight ? "light" : "dark"
            );

            if (themeIcon) {
                themeIcon.textContent =
                    isLight ? "☾" : "☀";
            }

        });
    }
        // =========================
    // NUTRITION CALCULATOR
    // =========================

    const nutritionCalculate =
        document.getElementById("nutritionCalculate");

    const nutritionAge =
        document.getElementById("nutritionAge");

    const nutritionHeight =
        document.getElementById("nutritionHeight");

    const nutritionWeight =
        document.getElementById("nutritionWeight");

    const nutritionGender =
        document.getElementById("nutritionGender");

    const nutritionActivity =
        document.getElementById("nutritionActivity");

    const nutritionBmr =
        document.getElementById("nutritionBmr");

    const nutritionTdee =
        document.getElementById("nutritionTdee");

    const nutritionActivityResult =
        document.getElementById("nutritionActivityResult");

    const nutritionError =
        document.getElementById("nutritionError");


    if (nutritionCalculate) {

        nutritionCalculate.addEventListener("click", () => {

            const age = Number(nutritionAge.value);
            const height = Number(nutritionHeight.value);
            const weight = Number(nutritionWeight.value);
            const gender = nutritionGender.value;
            const activity = Number(nutritionActivity.value);


            if (
                !age ||
                !height ||
                !weight ||
                !gender ||
                !activity
            ) {

                nutritionError.textContent =
                    "Please complete all fields.";

                return;
            }


            if (
                age < 1 ||
                height < 50 ||
                weight < 10
            ) {

                nutritionError.textContent =
                    "Please enter valid values.";

                return;
            }


            let bmr;


            if (gender === "male") {

                bmr =
                    (10 * weight) +
                    (6.25 * height) -
                    (5 * age) +
                    5;

            } else {

                bmr =
                    (10 * weight) +
                    (6.25 * height) -
                    (5 * age) -
                    161;

            }


            const tdee =
                bmr * activity;


            nutritionBmr.textContent =
                Math.round(bmr).toLocaleString();


            nutritionTdee.textContent =
                Math.round(tdee).toLocaleString();


            nutritionActivityResult.textContent =
                activity.toFixed(3);


            nutritionError.textContent = "";

        });

    }
        // =========================
    // ATHENA CHATBOT
    // =========================

    const chatbotMessages =
        document.getElementById("chatbotMessages");

    const chatbotOptions =
        document.getElementById("chatbotOptions");

    const chatbotReset =
        document.getElementById("chatbotReset");


    let chatbotLanguage = null;


    const chatbotData = {

        en: {

            welcome:
                "Welcome to ATHENA Assistant. Choose a category to continue.",

            language: [
                {
                    text: "English",
                    action: "language",
                    value: "en"
                },
                {
                    text: "العربية",
                    action: "language",
                    value: "ar"
                }
            ],

            categories: [
                {
                    text: "🥊 Boxing",
                    action: "category",
                    value: "boxing"
                },
                {
                    text: "🥋 MMA",
                    action: "category",
                    value: "mma"
                },
                {
                    text: "🧘 BJJ",
                    action: "category",
                    value: "bjj"
                },
                {
                    text: "🏃 Training",
                    action: "category",
                    value: "training"
                },
                {
                    text: "🥗 Nutrition",
                    action: "category",
                    value: "nutrition"
                },
                {
                    text: "📅 Events",
                    action: "category",
                    value: "events"
                }
            ],

            questions: {

                boxing: [
                    {
                        text: "What is Boxing?",
                        answer:
                            "Boxing is a combat sport focused on punches, movement, defense, timing and strategy."
                    },
                    {
                        text: "What skills are important?",
                        answer:
                            "Footwork, balance, defense, timing, conditioning and proper punching technique are important."
                    },
                    {
                        text: "Back to categories",
                        action: "categories"
                    }
                ],

                mma: [
                    {
                        text: "What is MMA?",
                        answer:
                            "MMA combines techniques from multiple combat sports, including striking, wrestling and grappling."
                    },
                    {
                        text: "What should beginners learn?",
                        answer:
                            "Beginners usually benefit from learning basic striking, movement, wrestling and grappling fundamentals with a qualified coach."
                    },
                    {
                        text: "Back to categories",
                        action: "categories"
                    }
                ],

                bjj: [
                    {
                        text: "What is BJJ?",
                        answer:
                            "Brazilian Jiu-Jitsu focuses mainly on grappling, positional control and submissions."
                    },
                    {
                        text: "Is BJJ only about strength?",
                        answer:
                            "No. Technique, positioning, timing and leverage are major parts of BJJ."
                    },
                    {
                        text: "Back to categories",
                        action: "categories"
                    }
                ],

                training: [
                    {
                        text: "How should I start?",
                        answer:
                            "Start with basic technique, mobility, conditioning and supervised practice. Consistency is more important than rushing."
                    },
                    {
                        text: "How often should I train?",
                        answer:
                            "A suitable schedule depends on your age, experience, recovery and coaching environment."
                    },
                    {
                        text: "Back to categories",
                        action: "categories"
                    }
                ],

                nutrition: [
                    {
                        text: "What does ATHENA Nutrition do?",
                        answer:
                            "Use the Nutrition section to estimate your daily energy needs from the information you enter."
                    },
                    {
                        text: "What should athletes focus on?",
                        answer:
                            "A balanced diet, adequate hydration, regular meals and enough energy for training are important."
                    },
                    {
                        text: "Back to categories",
                        action: "categories"
                    }
                ],

                events: [
                    {
                        text: "Upcoming events",
                        answer:
                            "Check the Events section on ATHENA for the currently listed events."
                    },
                    {
                        text: "Where are events shown?",
                        answer:
                            "ATHENA events are displayed in the Events section of the website."
                    },
                    {
                        text: "Back to categories",
                        action: "categories"
                    }
                ]

            }

        },


        ar: {

            welcome:
                "أهلاً بك في مساعد ATHENA. اختار القسم اللي عايز تعرف عنه.",

            language: [
                {
                    text: "English",
                    action: "language",
                    value: "en"
                },
                {
                    text: "العربية",
                    action: "language",
                    value: "ar"
                }
            ],

            categories: [
                {
                    text: "🥊 الملاكمة",
                    action: "category",
                    value: "boxing"
                },
                {
                    text: "🥋 MMA",
                    action: "category",
                    value: "mma"
                },
                {
                    text: "🧘 BJJ",
                    action: "category",
                    value: "bjj"
                },
                {
                    text: "🏃 التدريب",
                    action: "category",
                    value: "training"
                },
                {
                    text: "🥗 التغذية",
                    action: "category",
                    value: "nutrition"
                },
                {
                    text: "📅 الأحداث",
                    action: "category",
                    value: "events"
                }
            ],

            questions: {

                boxing: [
                    {
                        text: "ما هي الملاكمة؟",
                        answer:
                            "الملاكمة رياضة قتالية تعتمد على اللكم، الحركة، الدفاع، التوقيت والاستراتيجية."
                    },
                    {
                        text: "ما أهم مهارات الملاكمة؟",
                        answer:
                            "حركة القدمين، التوازن، الدفاع، التوقيت، اللياقة وتنفيذ اللكمات بطريقة صحيحة من أهم المهارات."
                    },
                    {
                        text: "العودة للأقسام",
                        action: "categories"
                    }
                ],

                mma: [
                    {
                        text: "ما هي MMA؟",
                        answer:
                            "MMA رياضة قتالية تجمع بين أكثر من أسلوب، مثل الضرب والمصارعة والـGrappling."
                    },
                    {
                        text: "ماذا يتعلم المبتدئ؟",
                        answer:
                            "يفضل أن يبدأ المبتدئ بأساسيات الضرب والحركة والمصارعة والـGrappling مع مدرب مؤهل."
                    },
                    {
                        text: "العودة للأقسام",
                        action: "categories"
                    }
                ],

                bjj: [
                    {
                        text: "ما هو BJJ؟",
                        answer:
                            "Brazilian Jiu-Jitsu يركز بشكل أساسي على الـGrappling والتحكم في الوضعيات وتقنيات الإخضاع."
                    },
                    {
                        text: "هل BJJ يعتمد على القوة فقط؟",
                        answer:
                            "لا. التقنية، الوضعية، التوقيت واستخدام الـLeverage من أهم عناصر BJJ."
                    },
                    {
                        text: "العودة للأقسام",
                        action: "categories"
                    }
                ],

                training: [
                    {
                        text: "كيف أبدأ التدريب؟",
                        answer:
                            "ابدأ بأساسيات التقنية والحركة واللياقة والتدريب تحت إشراف مدرب مناسب. الاستمرارية أهم من الاستعجال."
                    },
                    {
                        text: "كم مرة أتدرب؟",
                        answer:
                            "الجدول المناسب يختلف حسب العمر والخبرة والتعافي وبيئة التدريب."
                    },
                    {
                        text: "العودة للأقسام",
                        action: "categories"
                    }
                ],

                nutrition: [
                    {
                        text: "قسم Nutrition بيعمل إيه؟",
                        answer:
                            "قسم Nutrition يقدر يعطيك تقديراً لاحتياجاتك اليومية من الطاقة بناءً على البيانات التي تدخلها."
                    },
                    {
                        text: "إيه المهم في تغذية الرياضي؟",
                        answer:
                            "التغذية المتوازنة، شرب المياه بشكل كافٍ، انتظام الوجبات وتوفير الطاقة اللازمة للتدريب أمور مهمة."
                    },
                    {
                        text: "العودة للأقسام",
                        action: "categories"
                    }
                ],

                events: [
                    {
                        text: "الأحداث القادمة",
                        answer:
                            "يمكنك مشاهدة الأحداث الموجودة حالياً في قسم Events على موقع ATHENA."
                    },
                    {
                        text: "فين الأحداث؟",
                        answer:
                            "كل الأحداث الموجودة على الموقع يتم عرضها في قسم Events."
                    },
                    {
                        text: "العودة للأقسام",
                        action: "categories"
                    }
                ]

            }

        }

    };


    function chatbotAddMessage(
        text,
        type = "bot"
    ) {

        if (!chatbotMessages) return;

        const message =
            document.createElement("div");

        message.className =
            `chatbot-message ${type}`;

        message.textContent = text;

        chatbotMessages.appendChild(message);

        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;
    }


    function chatbotShowOptions(options) {

        if (!chatbotOptions) return;

        chatbotOptions.innerHTML = "";

        options.forEach(option => {

            const button =
                document.createElement("button");

            button.className =
                "chatbot-option";

            button.type = "button";

            button.textContent =
                option.text;

            button.addEventListener(
                "click",
                () => chatbotHandleOption(option)
            );

            chatbotOptions.appendChild(button);

        });

    }


    function chatbotStart() {

        if (!chatbotMessages || !chatbotOptions) {
            return;
        }

        chatbotMessages.innerHTML = "";

        chatbotLanguage = null;

        chatbotAddMessage(
            "Welcome to ATHENA Assistant / أهلاً بك في مساعد ATHENA"
        );

        chatbotAddMessage(
            "Choose your language / اختار اللغة",
            "bot"
        );

        chatbotShowOptions(
            chatbotData.en.language
        );

    }


    function chatbotHandleOption(option) {

        if (option.action === "language") {

            chatbotLanguage =
                option.value;

            const data =
                chatbotData[chatbotLanguage];

            chatbotAddMessage(
                option.value === "ar"
                    ? "العربية"
                    : "English",
                "user"
            );

            chatbotAddMessage(
                data.welcome,
                "bot"
            );

            chatbotShowOptions(
                data.categories
            );

            return;
        }


        if (!chatbotLanguage) {
            chatbotStart();
            return;
        }


        const data =
            chatbotData[chatbotLanguage];


        if (option.action === "category") {

            chatbotAddMessage(
                option.text,
                "user"
            );

            const questions =
                data.questions[option.value];

            chatbotAddMessage(
                chatbotLanguage === "ar"
                    ? "اختار سؤالك:"
                    : "Choose a question:",
                "bot"
            );

            chatbotShowOptions(
                questions
            );

            return;
        }


        if (option.action === "categories") {

            chatbotAddMessage(
                option.text,
                "user"
            );

            chatbotAddMessage(
                data.welcome,
                "bot"
            );

            chatbotShowOptions(
                data.categories
            );

            return;
        }


        if (option.answer) {

            chatbotAddMessage(
                option.text,
                "user"
            );

            chatbotAddMessage(
                option.answer,
                "bot"
            );

            const backButton = {
                text:
                    chatbotLanguage === "ar"
                        ? "العودة للأقسام"
                        : "Back to categories",
                action: "categories"
            };

            chatbotShowOptions([
                backButton
            ]);

        }

    }


    if (chatbotReset) {

        chatbotReset.addEventListener(
            "click",
            chatbotStart
        );

    }


    chatbotStart();
    const params = new URLSearchParams(window.location.search);

if (params.get("joined") === "true") {
    const email = localStorage.getItem("athenaEmail");

    if (email) {
        const notification = document.createElement("div");

        notification.innerHTML = `
            <div class="success-icon">✓</div>
            <div>
                <strong>Account Created Successfully</strong>
                <p>Your email <b>${email}</b> has been saved.</p>
            </div>
        `;

        notification.className = "success-notification";

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add("show");
        }, 100);

        setTimeout(() => {
            notification.classList.remove("show");

            setTimeout(() => {
                notification.remove();
            }, 400);
        }, 5000);

        window.history.replaceState({}, document.title, "index.html");
    }
}
document.querySelectorAll(".discipline-card").forEach(card => {
    card.addEventListener("click", () => {

        const sport = card.dataset.sport;

        const pages = {
            boxing: "boxing.html",
            mma: "mma.html",
            "muay-thai": "muay-thai.html",
            bjj: "bjj.html",
            wrestling: "wrestling.html",
            kickboxing: "kickboxing.html",
            judo: "judo.html",
            karate: "karate.html"
        };

        if (pages[sport]) {
            window.location.href = pages[sport];
        }

    });
});

});