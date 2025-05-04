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

let header = document.getElementById('header');
let main = document.getElementById('main');
let footer = document.getElementById('footer');

function info(generation) {
  let gen = document.getElementById(generation);
  
  header.classList.add('d-none');
  main.classList.add('d-none');
  footer.classList.add('d-none');
  gen.classList.remove('d-none');
}

function close(generation) {
  let gen = document.getElementById(generation);
  
  header.classList.remove('d-none');
  main.classList.remove('d-none');
  footer.classList.remove('d-none');
  gen.classList.add('d-none');
}

let close1 = document.getElementById('closeGen1')
let close2 = document.getElementById('closeGen2')
let close3 = document.getElementById('closeGen3')
let close4 = document.getElementById('closeGen4')
let close5 = document.getElementById('closeGen5')
let close6 = document.getElementById('closeGen6')

close1.addEventListener('click', () => {
  close('gen1')
})
close2.addEventListener('click', () => {
  close('gen2')
})
close3.addEventListener('click', () => {
  close('gen3')
})
close4.addEventListener('click', () => {
  close('gen4')
})
close5.addEventListener('click', () => {
  close('gen5')
})
close6.addEventListener('click', () => {
  close('gen6')
})