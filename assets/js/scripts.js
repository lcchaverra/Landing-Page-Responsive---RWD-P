const showMenu = (toggleID,navID) => {
    const toggle = document.getElementById(toggleID);
    const nav = document.getElementById(navID);
    
    if (toggle && nav) {
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('main-menu-toggle','main-nav')
