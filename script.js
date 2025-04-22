let i = 0;
function move() {
  if (i == 0) {
    i = 1;
    let myBar = document.getElementById("myBar");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        document.getElementById('load').classList.add('d-none')
        document.getElementById('open').classList.remove('d-none')
      } else {
        width++;
        myBar.style.width = width + "%";
      }
      
    }
  }
  
}
move()