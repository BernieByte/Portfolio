const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // remove #
        const targetSection = document.getElementById(targetId);

        if(targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',   // smooth scrolling
                block: 'start'
            });
        }
    });
});


