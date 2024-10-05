const btn=document.querySelector('#add');
const btnDelete=document.querySelector('#delete');
btn.addEventListener('click',(e)=>{
 
    document.cookie="subject=programiranje;SameSite=None;Secure";
   
});
btnDelete.addEventListener('click',()=>{
    
    key="subject="
    document.cookie=`${key};expires=Thu, 01 Jan 1978 00:00:00 UTC;`
    
});
