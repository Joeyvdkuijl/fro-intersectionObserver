let Links = document.querySelectorAll('nav a');

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