const bulletpoints = document.querySelectorAll(".checkbox");
bulletpoints.forEach(point => {
  point.addEventListener("click", checkUncheck);
});

function checkUncheck() {
  if (this.checked) {
    this.checked = false;
    this.style.opacity = "0.3";
  } else {
    this.checked = true;
    this.style.opacity = "1";
  }
}
