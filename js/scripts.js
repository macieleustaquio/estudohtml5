let i = 0;
function move() {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("html");
    let width = 10;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}

function move2() {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("css");
    let width = 10;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 60) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}

function move3() {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("javascript");
    let width = 10;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 20) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}