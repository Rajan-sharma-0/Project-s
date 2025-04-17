
let statuss = document.querySelector("h5");
let button = document.querySelector("#add");

let check = false;

button.addEventListener("click", function() {
    if(check == false){
        statuss.innerHTML = "Friends";
      statuss.style.color = 'green'
      check = true;
      add.innerHTML = 'Remove Friend'
    } else {
        statuss.innerHTML = "Stranger";
        statuss.style.color = ''
        check = false;
        add.innerHTML = 'Add Friend'
    }
});

