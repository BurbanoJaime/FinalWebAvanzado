var cambioDia = new Date();
var hora = cambioDia.getHours();
var minutos = cambioDia.getMinutes();

var tiempo = hora + "." + minutos;

var logo = document.getElementById("img_logo");
var img = document.getElementsByClassName("home__about__logo__img");


if (tiempo >= 19.0 && tiempo < 23.59 || tiempo >= 0.0 && tiempo < 5.59) {
    document.write('<link rel="stylesheet" href="/css/noches.css">');
    logo.innerHTML= '<img src="image/Noche.svg" alt="" srset="">';
} else if (tiempo > 6.0 && tiempo < 18.59) {
    document.write('<link rel="stylesheet" href="/css/index.css">');

} else {
    document.write('<link rel="stylesheet" href="/css/index.css">');
}