const card = document.getElementById('card')
const card1 = document.getElementById('card1')
const card2 = document.getElementById('card2')
const card3 = document.getElementById('card3')
const card4 = document.getElementById('card4')
const card5 = document.getElementById('card5')
const card6 = document.getElementById('card6')

const btn = document.getElementById('btn')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')

btn.addEventListener('click', function () {
    card.style.display = 'none'
    card1.style.display = 'block'
});
btn1.addEventListener('click', function () {
    card1.style.display = 'none'
    card2.style.display = 'block'
});
btn2.addEventListener('click', function () {
    card2.style.display = 'none'
    card3.style.display = 'block'
});
btn3.addEventListener('click', function () {
    card3.style.display = 'none'
    card4.style.display = 'block'
});
btn4.addEventListener('click', function () {
    card4.style.display = 'none'
    card5.style.display = 'block'
})
btn5.addEventListener('click', function () {
    card5.style.display = 'none'
    card6.style.display = 'block'
})
btn6.addEventListener('click', function () {
    card6.style.display = 'none'
    card.style.display = 'block'
})