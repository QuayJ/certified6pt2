//Below is for slider on testArtist.html

const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

tl.to(".text", {y:"0%", duration: 1, stagger: 0.25});
tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5});
tl.to(".intro1", {y: "-100%", duration: 1}, "-=1");

// tl.to(".text2", {y:"0%", duration: 1, stagger: 0.25});
// tl.to(".slider", {y: "100%", duration: 1.5, delay: 0.5});
// tl.to(".intro1", {y: "-100%", duration: 1}, "-=1");

tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, '-=1');


//below is for is home legend
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


//Below is for carousel

// const buttons = document.querySelectorAll("[data-carousel-button]")

// buttons.forEach(button => {
// buttons.addEventListener("click", () => {
//         const offset = button.dataset.carousel === "next" ? 1 : -1
//         const slides = button 
//             .closest("[data-carousel]")
//             .querySelector("[data-slides]")
//         const  activeSlide = slides.querySelector("[data-active]")
//         let newIndex = [...slides.children].indexOf(activeSlide) + offset
//         if (newIndex < 0) newIndex = slides.children.length - 1
//         if (newIndex >= slides.children.length) newIndex = 0

//         slides.children[newIndex].dataset.active = true
//         delete activeSlide.dataset.active

//     })
// })

//Below is for chart

const ctx = document.getElementById("myChart").getContext("2d");

const labels = [
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
];

const data = {
    labels,
    datasets: [{
        data: [1830000, 2338000, 1783000, 1739000, 407600],
        label: "Album Sales",
         },
    ],
};

const config = {
    type: "line",
    data: data,
    options: {
        responsive: true,
    },
};

const myChart = new myChart(ctx, config);