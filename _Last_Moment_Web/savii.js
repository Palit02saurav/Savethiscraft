const scrollContainer = document.querySelector('.services-scroll');
const btnLeft = document.querySelector('.slider-btn.left');
const btnRight = document.querySelector('.slider-btn.right');
const cards = document.querySelectorAll('.service-card');

let currentIndex = 0;

const gap = 25;
const cardWidth = cards[0].offsetWidth + gap;

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function smoothScrollTo(target, duration = 550) {
    const start = scrollContainer.scrollLeft;
    const change = target - start;
    const startTime = performance.now();

    function animate(time) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeOutCubic(progress);

        scrollContainer.scrollLeft = start + change * ease;

        if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

function updateActiveCard() {
    cards.forEach(card => card.classList.remove('active'));
    cards[currentIndex].classList.add('active');

    const centerOffset =
        currentIndex * cardWidth -
        (scrollContainer.clientWidth / 2 - cardWidth / 2);

    smoothScrollTo(centerOffset);
}

btnRight.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateActiveCard();
    }
});

btnLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateActiveCard();
    }
});
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function activateNavOnScroll() {
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + sectionId) {
                    link.classList.add("active");
                }
            });
        }
    });
}

window.addEventListener("scroll", activateNavOnScroll);
activateNavOnScroll();

updateActiveCard();