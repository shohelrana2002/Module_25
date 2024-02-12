// background  orange option:2 [int]
function bgColorOrange() {
  document.body.style.background = "orange";
}

// option 3 onclick

const colorYellow = document.getElementById("color-yellow");
colorYellow.onclick = yellowColor;
function yellowColor() {
  document.body.style.background = "yellow";
}

// option -3

const purple = document.getElementById("purple-color");
purple.onclick = function purpleColor() {
  document.body.style.background = "purple";
};

// option 4

const pink = document.getElementById("make-pink");

pink.addEventListener("click", pinkColor);
function pinkColor() {
  document.body.style.background = "pink";
}
// Option 4

const green = document.getElementById("make-green");
green.addEventListener("click", function makeGreen() {
  document.body.style.background = "green";
});

// final option 4
document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    document.body.style.background = "goldenrod";
  });
