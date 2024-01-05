// NAV-BAR TOGGLE

function toggleMenu() {
    const navList = document.querySelector('.navbar ul');
    navList.classList.toggle('show');
}



document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');

    function handleScroll() {
        const scrollY = window.scrollY;

        if (scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
});



// gsap.registerPlugin(ScrollTrigger)


// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//     console.log(e)
// })

// function raf(time) {
//     lenis.raf(time)
//     requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

