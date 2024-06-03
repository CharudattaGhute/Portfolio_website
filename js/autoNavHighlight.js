(() =>{
    const sections = document.querySelectorAll('section');
    const navItem = document.querySelectorAll(".nav-menu .nav-menu-inner ul li a");
    
    window.addEventListener('scroll', () => {
        let currentSection = "";
        
        sections.forEach(section =>{
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if(pageYOffset >= sectionTop){
                currentSection = section.getAttribute("id")
            }
        })

        navItem.forEach(a =>{
            a.classList.remove("active", "inner-shadow");
            a.classList.add("outer-shadow");
            if(a.classList.contains(currentSection)){
                a.classList.remove("outer-shadow", "hover-in-shadow");
                a.classList.add("active", "inner-shadow");
            }
        })
    })
})();