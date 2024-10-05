const btnToggle=document.getElementById('burger');
const navBar=document.querySelector('.holder');
const test=document.querySelector('.burg');
btnToggle.addEventListener('click',()=>{
    navBar.classList.toggle('active');
    test.classList.toggle('act')
});


//mijenjanje boje containera

const btnRemove=document.querySelector('#btn-remove');
const container=document.querySelector('.container');

btnRemove.addEventListener('click',()=>{
    container.classList.toggle('transparent-container');
    if(container.classList.contains('transparent-container')){
        btnRemove.innerHTML='Boja'
        console.log((container.classList).toString())
    }
    else{
        btnRemove.innerHTML="Bezboje";
        console.log((container.classList).toString())
    }
});