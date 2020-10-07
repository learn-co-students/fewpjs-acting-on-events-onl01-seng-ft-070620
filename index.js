// Your code here

let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 5}px`;
    }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left + 5}px`;
    }
}

function moveDodgerUp() {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);

    if (bottom > 0) {
        dodger.style.bottom = `${bottom + 5}px`;
    }
}

function moveDodgerDown() {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);

    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 5}px`;
    }
}


document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        console.log(e.key)
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        console.log(e.key)
        moveDodgerRight();
    }
    if (e.key === "ArrowUp") {
        console.log(e.key)
        moveDodgerUp();
    }
    if (e.key === "ArrowDown") {
        console.log(e.key)
        moveDodgerDown();
    }

})
