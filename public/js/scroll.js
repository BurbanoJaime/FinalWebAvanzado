//SECCIONES
var inicio = document.getElementById("home");
var skills = document.getElementById("skills");
var portfolio = document.getElementById("portfolio");
var exp = document.getElementById("exp");
var contact = document.getElementById("contact");


//BOTONES
var inicio_btn = document.getElementById("btn_nav_home");
var skills_btn = document.getElementById("btn_nav_skills");
var port_btn = document.getElementById("btn_nav_port");
var exp_btn = document.getElementById("btn_nav_exp");
var contact_btn = document.getElementById("btn_nav_contact");
var nav_btn = document.getElementById("nav");

//ALTOS ([nombre de la clase]_height)
var in_he = inicio.clientHeight;
var sk_he = in_he + skills.clientHeight;
var po_he = sk_he + portfolio.clientHeight;
var ex_he = po_he + exp.clientHeight;
var co_he = ex_he + contact.clientHeight;

window.onscroll = function () {
    posY = window.scrollY;

    //Inicio
    if (posY >= 0 && posY <= in_he) {
        nav_btn.classList.add("desaparecer");
        inicio_btn.classList.add("general__navegacion__activo");
        skills_btn.classList.remove("general__navegacion__activo");
        port_btn.classList.remove("general__navegacion__activo");
        exp_btn.classList.remove("general__navegacion__activo");
        contact_btn.classList.remove("general__navegacion__activo");

    }

    //Skills
    if (posY >= in_he && posY <= sk_he) {
        nav_btn.classList.remove("desaparecer");
        inicio_btn.classList.remove("general__navegacion__activo");
        skills_btn.classList.add("general__navegacion__activo");
        port_btn.classList.remove("general__navegacion__activo");
        exp_btn.classList.remove("general__navegacion__activo");
        contact_btn.classList.remove("general__navegacion__activo");
    }

    //Portfolio
    if (posY >= sk_he && posY <= po_he) {
        nav_btn.classList.remove("desaparecer");
        inicio_btn.classList.remove("general__navegacion__activo");
        skills_btn.classList.remove("general__navegacion__activo");
        port_btn.classList.add("general__navegacion__activo");
        exp_btn.classList.remove("general__navegacion__activo");
        contact_btn.classList.remove("general__navegacion__activo");
    }

    //Experiencia
    if (posY >= po_he && posY <= ex_he) {
        nav_btn.classList.remove("desaparecer");
        inicio_btn.classList.remove("general__navegacion__activo");
        skills_btn.classList.remove("general__navegacion__activo");
        port_btn.classList.remove("general__navegacion__activo");
        exp_btn.classList.add("general__navegacion__activo");
        contact_btn.classList.remove("general__navegacion__activo");
    }

    //Contacto
    if (posY >= ex_he && posY <= co_he) {
        nav_btn.classList.remove("desaparecer");
        inicio_btn.classList.remove("general__navegacion__activo");
        skills_btn.classList.remove("general__navegacion__activo");
        port_btn.classList.remove("general__navegacion__activo");
        exp_btn.classList.remove("general__navegacion__activo");
        contact_btn.classList.add("general__navegacion__activo");
    }

    //console.log(posY);
}

