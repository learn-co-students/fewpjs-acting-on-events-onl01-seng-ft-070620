var dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left - 10}px`
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left + 10}px`
  }
}

function moveDodgerUp() {
  var downNumbers = dodger.style.down.replace('px', '');
  var down = parseInt(downNumbers, 10)
  if (down > 0) {
    dodger.style.down = `${down + 10}px`
  }
}
  
document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowUp") {
    moveDodgerUp()
  }
})


document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  }
})

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
})
