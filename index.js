let dodger = document.getElementById("dodger");

// move the dodger 1 px to the left (if there's space)
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// move the dodger 1 px to the right (if there's space)
function moveDodgerRight() {
  let rightNumbers = dodger.style.left.replace("px", "");
  let right = parseInt(rightNumbers, 10);

  dodger.style.left = `${right + 1}px`;
}

// tracking the user's keystrokes
// and invoking moveDodgerLeft when they hit the left arrow key
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
