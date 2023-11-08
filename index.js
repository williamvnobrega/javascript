const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondToDegrees = ((seconds/60)*360) + 90;
    secondHand.style.transform = `rotate(${secondToDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesToDegrees = ((minutes/60)*360) + 90;
    minHand.style.transform = `rotate(${minutesToDegrees}deg)`;

    const hours = now.getHours();
    const hoursToDegrees = ((hours/60)*360) + 90;
    hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;
}

setInterval(setDate,1000);