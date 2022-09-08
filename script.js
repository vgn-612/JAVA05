document.getElementById("mygtukas").addEventListener("click", vykdom);

function vykdom() {
  let a = document.getElementById("number").value;
  if (a) {
    for (let i = a; i > 0; i--) {
      console.log(i);
    }
    a = 0;
  }
}
