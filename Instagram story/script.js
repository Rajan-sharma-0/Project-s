let arr = [
    {dp:"https://mediaslide-us.storage.googleapis.com/imgmodels/pictures/8322/107898/profile-1719494522-f68a260408d2baea7e690855ad69b6a7.jpg", story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinrD774LjezgtoJ6jCCXa8MzcKHPAMWBOloSG_1rvyOFEWh2pIenUByNnyjhzPKUKmGs&usqp=CAU "},
    {dp:"https://mediaslide-us.storage.googleapis.com/imgmodels/pictures/8322/107898/profile-1719494522-f68a260408d2baea7e690855ad69b6a7.jpg", story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinrD774LjezgtoJ6jCCXa8MzcKHPAMWBOloSG_1rvyOFEWh2pIenUByNnyjhzPKUKmGs&usqp=CAU "},
    {dp:"https://mediaslide-us.storage.googleapis.com/imgmodels/pictures/8322/107898/profile-1719494522-f68a260408d2baea7e690855ad69b6a7.jpg", story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinrD774LjezgtoJ6jCCXa8MzcKHPAMWBOloSG_1rvyOFEWh2pIenUByNnyjhzPKUKmGs&usqp=CAU "},
    {dp:"https://mediaslide-us.storage.googleapis.com/imgmodels/pictures/8322/107898/profile-1719494522-f68a260408d2baea7e690855ad69b6a7.jpg", story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinrD774LjezgtoJ6jCCXa8MzcKHPAMWBOloSG_1rvyOFEWh2pIenUByNnyjhzPKUKmGs&usqp=CAU "},
    {dp:"https://mediaslide-us.storage.googleapis.com/imgmodels/pictures/8322/107898/profile-1719494522-f68a260408d2baea7e690855ad69b6a7.jpg", story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinrD774LjezgtoJ6jCCXa8MzcKHPAMWBOloSG_1rvyOFEWh2pIenUByNnyjhzPKUKmGs&usqp=CAU "},
    {dp:"https://mediaslide-us.storage.googleapis.com/imgmodels/pictures/8322/107898/profile-1719494522-f68a260408d2baea7e690855ad69b6a7.jpg", story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinrD774LjezgtoJ6jCCXa8MzcKHPAMWBOloSG_1rvyOFEWh2pIenUByNnyjhzPKUKmGs&usqp=CAU "},
    {dp:"https://mediaslide-us.storage.googleapis.com/imgmodels/pictures/8322/107898/profile-1719494522-f68a260408d2baea7e690855ad69b6a7.jpg", story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinrD774LjezgtoJ6jCCXa8MzcKHPAMWBOloSG_1rvyOFEWh2pIenUByNnyjhzPKUKmGs&usqp=CAU "},
    
]

let users = document.querySelector('.users')
let cluttor = "";
arr.forEach(function(elem, idx){
        cluttor += `<div class="user">
                    <img id="${idx}" src="${elem.dp}" alt="">
                  </div>`
})


users.innerHTML = cluttor

users.addEventListener('click', (e)=>{ 
  document.querySelector('.full-screen').style.display = 'block'
  document.querySelector('.full-screen').style.backgroundImage = `url(${arr[e.target.id].story})`
  
  setTimeout(()=>{
    document.querySelector('.full-screen').style.display = 'none'

  },2000)

})