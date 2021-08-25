const board = document.querySelector('#board')
const colors = ['#33c749', '#33c7bd', '#3367c7', ' #c733ba', '#a1735e', '#41ee11', '#ee1111', '#11cdee']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(elemnet) {
    const color = getRandomColor()
    elemnet.style.backgroundColor = color
    elemnet.style.boxShadow = `0 0 2px ${color} , 0 0 10px ${color}`
}

function removeColor(elemnet) {
    elemnet.style.backgroundColor = '#353840'
    elemnet.style.boxShadow = `0 0 2px #000`

}

function getRandomColor() {
   const index =  Math.floor(Math.random() * colors.length)

   return colors[index]
}