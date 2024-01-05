// NAV-BAR TOGGLE

function toggleMenu() {
    const navList = document.querySelector('.navbar ul');
    navList.classList.toggle('show');
}

gsap.registerPlugin(ScrollTrigger)

// IMAGES ANIMATION GROUP
// gsap.utils.toArray('.images img').forEach((img) => {
//     gsap.fromTo(img,
//         {
//             // width: '600px',
//             opacity: 0,
//             x: '-100%'
//         },
//         {
//             // width: '300px',
//             opacity: 1,
//             x: '0%',
//             scrollTrigger: {
//                 trigger: img,
//                 start: 'top 80%',
//                 end: 'top 20%',
//                 scrub: true,
//             },
//         }
//     );
// });

// GRID-1

gsap.utils.toArray('.grid-items1 .left').forEach((img) => {
    gsap.fromTo(img,
        {
            opacity: 0,
            x: '-100%'
        },
        {
            opacity: 1,
            x: '0%',
            scrollTrigger: {
                trigger: img,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
            },
        }
    );
});

// GRID-2
gsap.utils.toArray('.grid-items2 .right').forEach((img) => {
    gsap.fromTo(img,
        {
            opacity: 0,
            x: '100%'
        },
        {
            opacity: 1,
            x: '0%',
            scrollTrigger: {
                trigger: img,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
            },
        }
    );
});

// GRID-3
gsap.utils.toArray('.grid-items3 .left2').forEach((img) => {
    gsap.fromTo(img,
        {
            opacity: 0,
            x: '-100%'
        },
        {
            opacity: 1,
            x: '0%',
            scrollTrigger: {
                trigger: img,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
            },
        }
    );
});

// GRID-1 CONTENT
// gsap.utils.toArray('.grid-items1 .content').forEach((item) => {
//     gsap.fromTo(item,
//         {
//             opacity: 0,
//             x: '100%', // Move the content to the right initially
//         },
//         {
//             opacity: 1,
//             x: '0%', // Bring the content back to its original position
//             scrollTrigger: {
//                 trigger: item,
//                 start: 'top 80%',
//                 end: 'top 20%',
//                 scrub: true,
//             },
//         }
//     );
// });

// GRID-2 CONTENT
// gsap.utils.toArray('.grid-items2 .content').forEach((item) => {
//     gsap.fromTo(item,
//         {
//             opacity: 0,
//             x: '-100%', // Move the content to the right initially
//         },
//         {
//             opacity: 1,
//             x: '0%', // Bring the content back to its original position
//             scrollTrigger: {
//                 trigger: item,
//                 start: 'top 80%',
//                 end: 'top 20%',
//                 scrub: true,
//             },
//         }
//     );
// });

// GRID-3 CONTENT
// gsap.utils.toArray('.grid-items3 .content').forEach((item) => {
//     gsap.fromTo(item,
//         {
//             opacity: 0,
//             x: '100%', // Move the content to the right initially
//         },
//         {
//             opacity: 1,
//             x: '0%', // Bring the content back to its original position
//             scrollTrigger: {
//                 trigger: item,
//                 start: 'top 80%',
//                 end: 'top 20%',
//                 scrub: true,
//             },
//         }
//     );
// });


// SEVICES

// gsap.fromTo('.service',
//     {
//         opacity: 0,
//         x: '-100%', // Move the service text to the left initially
//     },
//     {
//         opacity: 1,
//         delay: 0.1,
//         x: '0%', // Bring the service text back to its original position
//         scrollTrigger: {
//             trigger: '.service',
//             start: 'top 80%',
//             end: 'top 20%',
//             scrub: true,
//         },
//     }
// );


// FLOAT IMAGE
gsap.fromTo('.float',
    {
        scaleX: 1.5,
        // width: '100%',
        // height: '600px',
        // rotate: 0,
        // scaleY: 2,
    },
    {
        scaleX: 1,
        // width: '50%',
        // height: '400px',
        ease: 'power2.inOut',
        // rotate: 360,
        scaleY: 1,
        scrollTrigger: {
            trigger: '.floating-image',
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
        },
    }
);


// EMAIL

function sendFeedback() {
    var form = document.getElementById('feedbackForm');
    var formData = new FormData(form);

    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}







const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


// NAV-BAR SCROLLLING COLOR

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


