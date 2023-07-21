const btnEl = document.querySelector(".btn");
const msgElMeter = document.querySelector("#message-meter")
const msgElVolume = document.querySelector("#message-volume")
const msgElKilo = document.querySelector("#message-kilo")


btnEl.addEventListener('click', function (){
    const inputEl = document.querySelector(".input-el").value;

    if (inputEl === ''){
        alert("Please enter a valid number.");
    } else {
        length(inputEl);
        volume(inputEl);
        kilo(inputEl);
    }
})

function length(value) {
    msgElMeter.textContent = `${value} meters = ${(value * 3.281).toFixed(3)} feet | ${value} feet =  ${(value / 3.281).toFixed(3)} meters`
}

function volume(value) {
    msgElVolume.textContent = `${value} Liters = ${(value * 0.264).toFixed(3)} Gallion | ${value} Gallion =  ${(value / 0.264).toFixed(3)} Liters`
}

function kilo(value) {
    msgElKilo.textContent = `${value} Kilo = ${(value * 2.204).toFixed(3)} Pound | ${value} Pound =  ${(value / 2.204).toFixed(3)} Kilo`
}



/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//20 meters = 65.616 feet | 20 feet = 6.096 meters