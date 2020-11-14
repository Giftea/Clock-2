'use strict'
setInterval(setClock, 1000)
setInterval(changeBg, 2000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock (){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds()/60
    const minutesRatio = ( secondsRatio + currentDate.getMinutes() ) /60
    const hoursRatio = ( minutesRatio + currentDate.getHours()) / 12

    setRotation( secondHand, secondsRatio)
    setRotation( minuteHand, minutesRatio)
    setRotation( hourHand, hoursRatio)

}

function changeBg (){
    const boody = document.body;
    const acolor = `-webkit-linear-gradient(bottom left,rgb(${getRandomColor ()}, ${getRandomColor ()}, ${getRandomColor ()}) ,
    rgb(${getRandomColor ()}, ${getRandomColor ()}, ${getRandomColor ()}),
    rgb(${getRandomColor ()}, ${getRandomColor ()}, ${getRandomColor ()}))`;
    const tran = `transition: background 0.5s ease-in;`
    boody.style.background = acolor;
    boody.style.background = tran;
    
         
}

function getRandomColor (){
    return Math.floor(Math.random() * 255);
}
changeBg();


function setRotation( element, rotationRatio) {
    element.style.transform = "rotate(" + ( rotationRatio * 360) + "deg)"
}

setClock()