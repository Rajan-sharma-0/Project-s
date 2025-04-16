let input = document.querySelector('#inputBox')
let buttons = document.querySelectorAll('button')

let string = '';

for (item of buttons) { 
    item.addEventListener('click', (e) => {
        e.target.innerHTML = e.target.innerText;
        console.log('Button text is ', e.target.innerHTML);

           if (e.target.innerHTML == '=') {
            input.value = eval(string);
        
        }else if (e.target.innerHTML == 'DEL'){
            // string = string.substring(0, string.length-1);
            string = string.slice(0, -1)
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = ""
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
}