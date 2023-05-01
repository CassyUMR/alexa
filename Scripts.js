const button2 = document.getElementById('botao2');
let left = 40;
function move() {
  if(left == 40 || left == 30){
    left = 70;
  }
  else{
    left = 30
  }
  button2.style.marginLeft = left + 'px';
  console.log('se movio')
};
document.getElementById('botao1').addEventListener('click', function() {
  alert('SIII, TE AMO MUCHOOO❤️❤️');
  });