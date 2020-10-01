let dodger = document.getElementById('dodger');

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  } else if (e.key === "ArrowUp") {
    moveDodgerUp();
  } else if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
};

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
};

function moveDodgerUp() {
  let bottomNumbers = dodger.style.bottom.replace("px", "");
  let bottom = parseInt(bottomNumbers, 10);

  if (bottom < 400) {
    dodger.style.bottom = `${bottom + 2}px`;
  }
};

function moveDodgerDown() {
  let bottomNumbers = dodger.style.bottom.replace("px", "");
  let bottom = parseInt(bottomNumbers, 10);

  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 2}px`;
  }
};