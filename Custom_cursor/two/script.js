let cont = document.querySelectorAll(".cont");
let img = document.querySelector('.cont img')

cont.forEach((val) => {
  // console.log(val.childNodes[3]);  // To Know the node/position/index of image

  val.addEventListener("mouseenter", () => {
    val.childNodes[3].style.opacity = 1
  });
  val.addEventListener("mouseleave", () => {
    val.childNodes[3].style.opacity = 0
  });
  val.addEventListener('mousemove', (e)=>{
    val.childNodes[3].style.left = e.x + 'px'
    

  })
});
