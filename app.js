let topBarBtnMenu = document.querySelector(".topBarBtnMenu");
let topBarNav = document.querySelector(".topBarNav");
let copyRightDate = document.querySelector('.copyRight');
let footerDate;
let localDate;

/**
 * Listent if doc has load
 */
window.addEventListener('load', function() {
    let clientWidth = document.body.clientWidth;
    if(clientWidth >= 940) {
        topBarNav.classList.add("visible");
    }
})

/**
 * menu button
 */
topBarBtnMenu.addEventListener("click", () => {
    if (!topBarNav.classList.contains(".visible")) {
        topBarNav.classList.toggle("visible");
    }
});

/**
 * links & menus
 */
let links = document.querySelectorAll(".topBarNav a");
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {

        // From a -> li by parentNode
        let li = this.parentNode; // this -> links[i]
        // We select a li containing active class
        let liActive = document.querySelector(".active")

        if (li.classList.contains("active")) {
            return false;
        }
        // We remove a link on class active
        liActive.classList.remove("active");
        // We add an active class to actuel li
        li.classList.add("active");


        // We select a section containing class active
        let sectionActive = document.querySelector(".common.active");
        // We remove a section containing class active
        sectionActive.classList.remove("active");


        // We select a section wrapper that containe all the sections & We select actual link to get attribute href & add an active class on it.
        let sectionActual = document.querySelector("#getAttr");
        let getAttr =  sectionActual.querySelector(this.getAttribute("href"));
        getAttr.classList.add("active");
 
    })
}

/**
 * mediaQuerie
 *
 */
window.addEventListener("resize", function(e) {
    let clientWidth = document.body.clientWidth;
    if(clientWidth >= 940) {
        topBarNav.classList.add("visible");
    } else {
        topBarNav.classList.remove("visible");
    }
})

/**
 * copyright date
 */
footerDate = new Date();
localDate = footerDate.getFullYear();
copyRightDate.innerText = `${localDate} ©️ Espresso Coffee`;
