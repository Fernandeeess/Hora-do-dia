let agora = new Date();
let hora = 6 // agora.getHours();
let minutos = agora.getMinutes();
let paragrafo = document.getElementById("paragraph");
let imgpa = document.getElementById("imgpa");




console.log("Agora sao exatamente " + hora + ":" + minutos + " horas");
if (hora > 5 && hora < 12) {
    imgpa.src = "/imagens/Morning.jpg";
    paragrafo.innerHTML = "Agora são " + hora + ":" + minutos + " da manha";
    document.body.style.backgroundColor = "#FAA136";
    console.log("Bom Dia!");
} else if (hora >= 12 && hora < 18) {

    imgpa.src = "/imagens/evening.jpg";
    paragrafo.innerHTML = "Agora são " + hora + ":" + minutos + " da tarde";
    document.body.style.backgroundColor = "#FAB106";
    console.log("Boa Tarde!");

} else if (hora > 18 && hora <= 24) {
    imgpa.src = "/imagens/night.jpg"
    paragrafo.innerHTML = "Agora são " + hora + ":" + minutos + " da noite";
    document.body.style.backgroundColor = "#262C3B";
    console.log("Boa  Noite!");

} else if (hora >= 0 && hora < 05) {

    paragrafo.innerHTML = "Agora são " + hora + ":" + minutos + " da madrugada";
    document.body.style.backgroundColor = "#0E163B";
    imgpa.src = "/imagens/dawn.jpg";
    console.log("Boa Madrugada");



} else {
    console.log(invalid)
}