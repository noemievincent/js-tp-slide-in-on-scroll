document.documentElement.classList.add("js-enabled");

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
}
let observer = new IntersectionObserver(callback, options);
const aTargets = document.querySelectorAll('.slide-in');

for (const eTarget of aTargets) {
    eTarget.addEventListener('load', (event)=> {
        observer.observe(eTarget);
    });
}

function callback(entries, observer) {
    entries.forEach(entry => {
        // chaque élément de entries correspond à une variation
        // d'intersection pour un des éléments cible:
        // console.log(entry.isIntersecting);

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
        else {
            entry.target.classList.remove("active");
        }
    });
}
