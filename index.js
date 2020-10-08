// Your code here
dodger.style.backgroundColor = "#5300B6";
document.addEventListener("keydown", function(e) 
{
    if (e.key === "ArrowLeft") 
    {
      moveDodgerLeft()
    }
    if (e.key === "ArrowRight") 
    {
        moveDodgerRight()
    }

});
function moveDodgerRight()
{
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left + 1}px`;
}

function moveDodgerLeft()
{
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
}