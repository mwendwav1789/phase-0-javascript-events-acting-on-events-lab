// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const left = parseInt(dodger.style.left) || 0;
  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}

function moveDodgerRight() {
  const left = parseInt(dodger.style.left) || 0;
  if (left < window.innerWidth - 50) {
    // Assuming the width of the dodger is 50px
    dodger.style.left = `${left + 10}px`;
  }
}

// Optional: Add event listeners to move the dodger with keyboard arrows
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
