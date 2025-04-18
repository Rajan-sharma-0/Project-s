let body = document.querySelector("#main");
let curser = document.querySelector("#cursor");

body.addEventListener("mousemove", function(e){
  curser.style.left = e.x + "px";
  curser.style.top = e.y + "px";
});

// body.addEventListener('mousemove', (e)=>{
//     console.log(e.x)
// })