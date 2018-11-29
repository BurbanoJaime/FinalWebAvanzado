var esp = document.getElementById("espanol");
var ing = document.getElementById("ingles");

esp.addEventListener('click', function () {
    if (!esp.classList.contains("general__idioma__btn__active")) {
        esp.classList.add("general__idioma__btn__active");
        ing.classList.remove("general__idioma__btn__active");
    }
})

ing.addEventListener('click', function () {
    if (!ing.classList.contains("general__idioma__btn__active")) {
        esp.classList.remove("general__idioma__btn__active");
        ing.classList.add("general__idioma__btn__active");
    }
})

console.log(esp);