// Write your code here
const bulb1 = document.querySelector('#lightbulb1')
const bulb2 = document.querySelector('#lightbulb2')
const bulb3 = document.querySelector('#lightbulb3')
const lights = document.querySelectorAll('.item')
const h3 = document.querySelector('.subtitle')
let count = 0

h3.innerHTML = `You've clicked the lightbulbs ${count} time`

const handleClick = function(){
    count += 1
    if(count <= 1){
         h3.innerHTML = `You've clicked the lightbulbs ${count} time`
    } else {
        h3.innerHTML = `You've clicked the lightbulbs ${count} times`
    }
    this.classList.toggle('active')
}

// bulb1.addEventListener('mouseenter', handleClick)
// bulb2.addEventListener('mouseenter', handleClick)
// bulb3.addEventListener('mouseenter', handleClick)
lights.forEach((light) => {
    light.addEventListener('click', handleClick)
})