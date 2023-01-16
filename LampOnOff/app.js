let On = document.querySelector("#turnOn").addEventListener("click", () => {
    lamp.src="img/ligada.jpg";
})
let Off = document.querySelector("#turnOff").addEventListener("click", () => {
    lamp.src="img/desligada.jpg";
})
let Broken = document.querySelector("#lamp").addEventListener("click", () =>{
    lamp.src="img/quebrada.jpg";
})