
let x=function(){
    x=30;
    return x
}
console.log(x())

function test(a,b){
    let res_sum=a+b;
    let res_divide=a / b;
    return{
        sum:res_sum,
        divi:res_divide
    };
}
//console.log("rezultat je" +test(2,2).divi)
/*Arrow funkcija*/
let print=()=>{
    console.log("arrow fja")
}
print();

let printPerson=(name,id)=>{
    console.log("Name:"+name+" Id:"+id);
}
printPerson("marko",1);
/****************************************/

let res=test(10,20)
console.log(res.sum);

function changeParagraph(){
       let p=document.getElementById('p1');
       p.innerText="e";
       
}

//Promjena vrijednosti niza i promjena varijable vrijednosti
//za varijable promjene nema za niz dogodi se promjena
function changeNum(num){
    num=20;
}
let num=10;
changeNum(num);
console.log("Nakon promjene vrijednost je"+`${num}`);

function addNumInArr(arr){
    arr.push(4);
}
let arr=[1,2,3];
addNumInArr(arr);
console.log("Arr nakon modificiranja :"+`${arr}`);//Ispis:1 2 3 4 fja prima referencu na objekt ili niz


let month=1;

switch(month){
    case 1:
        let m="January"
        console.log("January");

        break;
    case 2:
        console.log("February");
        break;

}

/*Nizovi i petlje*/
/****************************************/
let numbers=[1,2,3,4,5,6,7];
let n=numbers.length;
let counter=0;

while(counter < n){
    //console.log(numbers[counter]);
    counter++;
}
/****************************************/

for(let counter=0;counter < n;counter++){
    //console.log(numbers[counter])
}
//Kraci zapis petlje:
for(let num of numbers){
    console.log(num);
}


let cars=['Audi','Bmw','Golf','Mercedes'];

cars.forEach(function(car){
    console.log(car);
});

/****************************************/

//Rad sa objektima
let user={
    user_name:"Marko",
    user_age:20,
    user_id:5

};
//console.log(user.user_id,user.user_name);

let allcars={
    audi:['20000','2017','Q7'],
    bmw:['10000','2017','116d']
}
//print objekta sa in
let person={
	name:"Marko",
  	id:5,
  	status:"student"

};
for(let p in person){
     console.log(person[p]);
}

//za objekte in 
//` ` BACKTICK alt+7
for(car in allcars){
    let name_of_car=car;
    let car_details=allcars[car];
    console.log(`${name_of_car} model: ${car_details[2]}`);
};
/****************************************/
//Kombiniranje funkcije s objektom
function printCar(model){
    console.log(allcars[model]);
}
printCar("audi")

/*Iz htmla na konzolu ispis*/
let car_model=document.getElementsByClassName('car_model');
//Mozemo napisat i na nacin
//document.querySelectorAll('.car-model');

for(let car of car_model){
    console.log(car.innerText);
}
//Kreiranje div elementa
let new_element=document.createElement('div');
new_element.classList='new-element';
//new_element.innerText='Novi element'
let body=document.querySelector('body');
body.appendChild(new_element)

console.log(new_element)

/****************************************/
//CALLBACKS
const button_click =document.querySelector('.btn-click');
function toggle(){
    button_click.classList.toggle('change-color');
}
/* 
button_click.addEventListener('click',()=>{
    button_click.classList.toggle('change-color');
})
*/
//Zadatak kalkulator zbrajanja
function calculate(){
    let a=document.getElementById('input_a');
    let b=document.getElementById('input_b');
     
    let var_a=Number(a.value);
    let var_b=Number(b.value);
    let r=var_a+var_b;

    let res=document.querySelector('#res');
    res.innerHTML=`Rez je : <b>${r}</b>`;    
}
function init(){
    window.addEventListener('load',()=>{
        let a=document.getElementById('input_a');
        let b=document.getElementById('input_b');
        a.addEventListener('change',calculate);
        b.addEventListener('change',calculate);
     });
}
init();
/****************************************/

function addName(){
     let name=document.getElementById('name').value;

     let template=`<article class="person">
                        <h2>${name}</h2>
                   
                    <p>Podaci o ${name} </p>
                   </article>`;
    document.querySelector('#names').innerHTML+=template;
    
    document.getElementById('name').value='';
}
function init2(){
    let btn=document.querySelector('#add-name');
    btn.addEventListener('click',addName);
}
window.addEventListener('load',init2);



/****************************************/

//Bubbling Efekt
//imamo div i h1 kad kliknemo na h1 dobijemo  sto smo
//kliknili i njegov parent 

let parent=document.querySelector('.parent');
parent.addEventListener('click',(e)=>{
    alert("Target:"+e.target.tagName+', parent: '+e.currentTarget.tagName);
})
