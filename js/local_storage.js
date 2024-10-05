//Local storage svojstva
/*localStorage.setItem(key,value)
localStorage.getItem(key)
JSON.stringify(jsObject)-//objekt u String
JSON.parse() - //u objekt
localStorage.clear() //brisanje itema iz localStorage,key je parametar
localStorage.removeItem() 
//primjer:
localStorage.removeItem('theme');
localStorage.key() //dohvati sa specificne lokacije
localStorage.length()
*/

//Vjezba:Unos imena i pamcenje:
/*
if(localStorage.getItem('name')==null){
    let name=prompt("Unesi ime");
    localStorage.setItem('name',name);
}else{
    alert('Hello'+localStorage.getItem('name'));
}*/
//LS -local storage
//Vjezba - uvecavanje broja na botun i spremanje 
/*
let parag=document.getElementById('count');
let btn=document.getElementById('add');
if(localStorage.getItem('counter')==null){ //ako postoji u LS counter onda na paragraf postavljamo tu vrijednost
        localStorage.setItem('counter',0);

}else{
    parag.innerHTML=localStorage.getItem('counter');
}
btn.addEventListener('click',()=>{
       let currentValue=localStorage.getItem('counter');
       let paragValue=+parag.innerHTML; //+ cast u broj

       parag.innerHTML=paragValue+1;
       
       if(currentValue < paragValue +1){
            localStorage.setItem('counter',paragValue+1)
       }
    
})

let todoForm=document.querySelector('#todo-form');
let todoInput=document.querySelector('#todo-input');
let todoList=document.querySelector('#todo-list');

let todos=JSON.parse(localStorage.getItem('todos')) || []

function addTodo(e){
    e.preventDefault() //zbog submita
     
    let todoText=todoInput.value.trim() //cut space trim
    
    if(todoText===''){
        return
    }
    todos.push(todoText);
    localStorage.setItem('todos',JSON.stringify(todos));
    todoInput.value='';
    
    renderTodos()

}
function renderTodos(){
    todoList.innerHTML='';
    todos.forEach(function(todo) {
        let li=document.createElement('li');
        li.textContent=todo;
        todoList.appendChild(li);
        li.addEventListener('click',()=>{
            li.classList.add('active')
       
        })
    });
    
}

todoForm.addEventListener('submit',addTodo)
renderTodos()
localStorage.clear()*/

//vjezba unos_podatka

let inputs=document.querySelectorAll('.input-text');
let pText=document.querySelector('#setText');

let btnSubmit=document.querySelector('#submit');

let saveDataLocalStorage=()=>{
    let firstName=inputs[0].value;
    let userId=inputs[1].value;  
    console.log('prije uvjeta'+userId)
    if(firstName==''){
        firstName='Nepoznat';
    }

    if(userId==''){
        userId='Nepoznat id';
    }
    console.log(userId.length)
    let userData=firstName + ' ' + userId;
    localStorage.setItem('userData',userData);

};

let displayData=()=>{
    let savedData=localStorage.getItem('userData');
    if(savedData){
        pText.textContent='Pozdrav' + ' ' + savedData;
        inputs.forEach(input => input.style.display='none');
        btnSubmit.style.display='none';
    }
    console.log('izvrsena fja');
}
displayData()

btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault();
    saveDataLocalStorage();
    displayData();

});
localStorage.clear()