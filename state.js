const state = {
    player1: {
        count: 0,
        element: player1
    },
    player2: {
        count: 0,
        element: player2
    },
    currentPlayer: (Math.random() > .5) ? 'player1' : 'player2'   //ternary operator
}

module.exports = state
