let container = document.querySelector('#container')
let love = document.querySelector('i')

container.addEventListener('dblclick', ()=>{
    love.style.transform = 'translate(-50%, -50%) scale(1.5)';
    love.style.opacity = 0.8;
    setTimeout(function () {
        love.style.opacity = 0;    
    },400)
    setTimeout(function () {
        love.style.transform = 'translate(-50%, -50%) scale(0)';    
    },500)
})