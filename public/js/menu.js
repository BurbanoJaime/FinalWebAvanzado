var bur = document.getElementById("hamburguesa");
var men = document.getElementById("menuRes");

var inicio = document.getElementById("home");
var skills = document.getElementById("skills");
var porta = document.getElementById("portfolio");
var exp = document.getElementById("exp");
var contact = document.getElementById("contact");
var n;

bur.addEventListener("click", function () {
    console.log("hola");
    if (men.classList.contains("activar_menu")) {
        n = 0;
        return n;
    } else if (!men.classList.contains("activar_menu")) {
        n = 1;
        return n;
    }
});

/*
switch (n) {
    case "0":
        men.classList.remove("activar_menu");
        consrole.log("J");

        break;

    case "1":
        men.classList.add("activar_menu");
        break;

    default:
        break;
}*/
//console.log(n);