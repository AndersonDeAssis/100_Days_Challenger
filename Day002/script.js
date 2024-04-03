var menu = document.querySelector('.burguer')

var elementOne = document.querySelector('.line1')
var elementTwo = document.querySelector('.line2')
var elementThree = document.querySelector('.line3')

// preciso criar um addEventListener para ouvir o click quando executar o menu e ter uma funçao dentro desse listener

addEventListener('click',
function clickMenu(){
        elementOne.classList.toggle('top')
        elementTwo.classList.toggle('mid')
        elementThree.classList.toggle('buttom')
})