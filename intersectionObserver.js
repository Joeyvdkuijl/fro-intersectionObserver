let Links = document.querySelectorAll('nav a');
let secties = document.querySelectorAll('section');

const opties = {};

const verwerkDoorsnijden = (entries, observer) => {
    entries.forEach( entry => {
        console.log(entry.target + "doorsnijdt" + entry.isIntersecting);
    })
}

let observer = new IntersectionObserver(verwerkDoorsnijden, opties);

observer.observe(secties[1]);

const verwijderActief = () => {
    Links.forEach( (link) => {
        if( link.classList = 'actief') {
            link.classList.remove('actief');
        }
    });
}

const maakActief = (elem) => {
    werwijderActief();
    elem.classList.add('actief');
}

Links.forEach( ( link ) => {
    link.addEventListener( 'click', (e) => {
        e.preventDefault();
        maakActief(e.target);
        window.location = e.target.href;
    })
} )