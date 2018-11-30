//Botones
var esp_btn = document.getElementById("espan");
var ing_btn = document.getElementById("ingl");

//Contenido
var esp_tx = document.getElementById("esp");
var ing_tx = document.getElementById("ing");

/*esp_btn[0].addEventListener('click', function () {
    esp_btn[0].classList.add("general__idioma__btn__active");
    ing_btn[0].classList.remove("general__idioma__btn__active");

    esp_tx.classList.remove("desa");
    ing_tx.classList.add("desa");

});

ing_btn[0].addEventListener('click', function () {
    esp_btn[0].classList.remove("general__idioma__btn__active");
    ing_btn[0].classList.add("general__idioma__btn__active");

    ing_tx.classList.remove("desa");
    esp_tx.classList.add("desa");
    console.log("funciona")

});

//ingles
esp_btn[1].addEventListener('click', function () {
    esp_btn[1].classList.add("general__idioma__btn__active");
    ing_btn[1].classList.remove("general__idioma__btn__active");

    esp_tx.classList.remove("desa");
    ing_tx.classList.add("desa");

});

ing_btn[1].addEventListener('click', function () {
    esp_btn[1].classList.remove("general__idioma__btn__active");
    ing_btn[1].classList.add("general__idioma__btn__active");

    ing_tx.classList.remove("desa");
    esp_tx.classList.add("desa");
    console.log("funciona")

});*/

//console.log("hola");

var esp_btn = document.getElementById("espan");
var ing_btn = document.getElementById("ingl");

var logo = document.getElementById("img_logo");
var img = document.getElementsByClassName("home__about__logo__img");


esp_btn.addEventListener('click', function () {
    document.write('<link rel="stylesheet" href="/css/index.css">');
    logo.innerHTML = '<img src="image/logo.svg" alt="" srset="">';

});

ing_btn.addEventListener('click', function () {
    document.write('<link rel="stylesheet" href="/css/noches.css">');
    logo.innerHTML = '<img src="image/Noche.svg" alt="" srset="">';
});

/*ing_btn[0].addEventListener('click', function () {
    esp_btn[0].classList.remove("general__idioma__btn__active");
    ing_btn[0].classList.add("general__idioma__btn__active");

    ing_tx.classList.remove("desa");
    esp_tx.classList.add("desa");
    console.log("funciona")

});

//ingles
esp_btn[1].addEventListener('click', function () {
    esp_btn[1].classList.add("general__idioma__btn__active");
    ing_btn[1].classList.remove("general__idioma__btn__active");

    esp_tx.classList.remove("desa");
    ing_tx.classList.add("desa");

});

ing_btn[1].addEventListener('click', function () {
    esp_btn[1].classList.remove("general__idioma__btn__active");
    ing_btn[1].classList.add("general__idioma__btn__active");

    ing_tx.classList.remove("desa");
    esp_tx.classList.add("desa");
    console.log("funciona")

});*/

//console.log("hola");