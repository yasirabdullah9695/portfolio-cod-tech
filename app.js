
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// GSAP Animations
// gsap.from('.title', {duration: 0.5, y: -50, opacity: 0, ease: 'power2.out'});
gsap.from('.subtitle', {duration: 2.5, y: 50, opacity: 0, ease: 'power2.out', delay: 0.5});
gsap.from('.btn', {duration: 1, scale: 0, opacity: 0, ease: 'elastic.out(1, 0.75)', delay: 1});

// Smooth Scrolling to Projects Section (if you want to enable it in the future)
// document.querySelector('.btn').addEventListener('click', () => {
//     gsap.to(window, {duration: 1, scrollTo: ".projects"});


const workButton = document.getElementById('workButton');
workButton.addEventListener('click', () => {
    // Navigate to the projects.html file
    window.location.href = "projects.html";
});

const next = document.getElementById('next');
next.addEventListener('click', () => {
    // Navigate to the projects.html file
    window.location.href = "about.html";
 

});
