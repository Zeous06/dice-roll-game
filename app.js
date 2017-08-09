const state = require('./state.js')

const dieContainer = document.querySelector('.die-container')

function movePlayer(tileNumber) {
    state.player1.count += tileNumber

    const tilePosition = document.querySelector('#tile' + state.player1.count).getBoundingClientRect()

    player1.style.top = tilePosition.top + 'px'
    player1.style.left = tilePosition.left + 'px'
}

dieContainer.addEventListener('click', function() {
    die.setAttribute('src', 'img/Dodecahedron3.gif')
    const num = Math.floor( Math.random() * 10 ) + 1

    roll.textContent = '?'
    setTimeout(function() {
        roll.textContent = num
        movePlayer(num)
    }, 1800)
})
