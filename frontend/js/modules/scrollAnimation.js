export function scrollAnimation() {
    const featureCards = document.querySelectorAll(".feature-card");
    const albumCards = document.querySelectorAll(".album-card");
    const quoteElements = document.querySelectorAll(".quote-text, .quote-author");
    const whyCards = document.querySelectorAll(".why-card");
    const sectionTitles = document.querySelectorAll(".section-title, .section-subtitle");

    function startGsapPlugins() {
        if (typeof gsap === "undefined") {
            return;
        }

        if (typeof ScrollTrigger !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }
    }

    function revealOnScroll(elements, moveY, duration) {
        if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
            return;
        }

        if (!elements || elements.length === 0) {
            return;
        }

        let i = 0;

        while (i < elements.length) {
            gsap.from(elements[i], {
                opacity: 0,
                y: moveY,
                duration: duration,
                ease: "power2.out",
                delay: 0.08 * i,
                scrollTrigger: {
                    trigger: elements[i],
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            i = i + 1;
        }
    }

    function startHeroAnimation() {
        const heroTitleTop = document.querySelector(".hero-title-top");
        const heroTitleBottom = document.querySelector(".hero-title-bottom");
        const heroCopy = document.querySelector(".hero-copy");
        const heroButton = document.querySelector(".hero-button");

        if (typeof gsap === "undefined") {
            return;
        }

        if (heroTitleTop) {
            gsap.from(heroTitleTop, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out"
            });
        }

        if (heroTitleBottom) {
            gsap.from(heroTitleBottom, {
                opacity: 0,
                y: 50,
                duration: 1,
                delay: 0.2,
                ease: "power3.out"
            });
        }

        if (heroCopy) {
            gsap.from(heroCopy, {
                opacity: 0,
                y: 40,
                duration: 1,
                delay: 0.4,
                ease: "power2.out"
            });
        }

        if (heroButton) {
            gsap.from(heroButton, {
                opacity: 0,
                y: 30,
                duration: 0.9,
                delay: 0.6,
                ease: "power2.out"
            });
        }
    }

    function startHomeScrollReveal() {
        revealOnScroll(sectionTitles, 40, 0.9);
        revealOnScroll(featureCards, 50, 0.9);
        revealOnScroll(albumCards, 60, 0.9);
        revealOnScroll(quoteElements, 40, 1);
        revealOnScroll(whyCards, 50, 0.9);
    }

    startGsapPlugins();
    startHeroAnimation();
    startHomeScrollReveal();
}