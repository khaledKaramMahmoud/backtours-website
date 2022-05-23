const date = document.getElementById("date");
const btn = document.getElementById("nav_toggle");
const links = document.querySelector(".nav_links");
const navbar = document.querySelector(".navbar");
const scroll_link = document.querySelectorAll(".scroll_link");
// set date in footer
date.innerHTML = new Date().getFullYear();
// toggle links
btn.addEventListener("click", () => {
    links.classList.toggle("show_links");
});
// fixed navbar
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 62) {
        //when inspect i found height of nav is 62px
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
});
// smooth scroll
scroll_link.forEach(myLink => {
    myLink.addEventListener("click", e => {
        e.preventDefault(); //to avoid bahaviour of links and make my scroll
        links.classList.remove("show_links"); //hide links on click at a link
        const id = e.target.getAttribute("href").slice(1); //refer to all links to get id result will be #.. so i sliced it
        const element = document.getElementById(id); //to know distance for this element from the link
        //position
        let position;
        //nav on big screen
        if (navbar.classList.contains("fixed")) {
            //when nav is fixed
            position = element.offsetTop - 62;
        } else {
            //when nav isn't fixed yet
            position = element.offsetTop - 62 * 2; //double it cause on click it will scroll and fix then doublicate
        }
        //nav on small screen
        if (window.innerWidth < 768) {
            if (navbar.classList.contains("fixed")) {
                //when nav is fixed
                position = element.offsetTop - 62;
            } else {
                if (id == "featured") {
                    //when click on Explore there are no fixed nav
                    position = element.offsetTop - 62 * 2;
                } else {
                    position = element.offsetTop - (351 + 62);
                }
            }
        }
        //when scrolling
        window.scrollTo({
            left: 0, //scroll top & bottom only
            top: position,
            behavior: "smooth"
        });
    });
});