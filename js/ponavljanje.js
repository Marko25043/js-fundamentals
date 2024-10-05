// const printDetails=(number)=>{
//     number = 5;
//     for(let i=0; i < number; i++){
//         console.log("number is ",i);
//     }

// }
// printDetails(10)
// function Person(pname,age){ 
//     this.pname = pname;
//     this.age=age;
//     //privatna funkcija
//     // let printPersonDetails = function(){
//     //     console.log(`${pname} a godine su : ${age}`)
//     // }
//     this.printPersonDetails = function(){
//         console.log(`${pname} a godine su : ${age}`)
//     }

// }
// const p1 = new Person("Marko",21);
// p1.printPersonDetails();

// const btnAdd = document.querySelector('.add');
// btnAdd.addEventListener('click',()=>{
//     const text = document.querySelector("h2");
//     text.textContent = "dd";
// });

// class Person{
//     constructor( pname ){
//         this.pname = pname;
//     }
//     printName(){
//         console.log("Name is: ",this.pname);
//     }
// }
// // const p1 = new Person("Marko");
// // p1.printName()

// class Student extends Person{
//     constructor(sname,studentAge){
//         super(sname)
//         this.studentAge =  studentAge;
//     }
//     printStudentDetails(){
//         super.printName();
//         console.log("Age is: ", this.studentAge);
    
//     }
//     #privateFunction(){
//         console.log("printing........")
//     }
//     getPrivateInfo(){
//         return this.#privateFunction();
//     }
// }
// const s1 = new Student("Marko",21);
// s1.printStudentDetails();
// s1.getPrivateInfo()

// const calculateSum = (a, b) =>{
//     let res = a + b;
//     setTimeout(() => {
//          console.log("Result is" ,res);
//     }, 3000);
// }
// calculateSum(10,20)

// const calculateSum = (a, b) =>{
//     let res = a + b;
//     return new Promise((resolve, reject) =>{
//             if (res > 0){
//                 resolve(console.log("suma je veca od 0 "));
//             }
//             else{
//                 reject(console.log("suma je manja od 0"));
//             }
//     })

// }

// calculateSum(10,20).then().catch()

// const fetchData = (personAge) => { 
//         return new Promise((resolve, reject)=>{
//             if(personAge >= 18){
//                 setTimeout(() => {
//                     resolve("Osoba je punoljetna");
//                 }, 4000);
//             }
//             else{
//                 setTimeout(()=>{
//                     reject("osoba nije punoljetna");
//                 }, 4000);
//             }

//         });
// }
// async function getData(age){
//     console.log("cekamo podatke")
//     try{
//         const data = await fetchData(age);
//         console.log(data);
    
//     }
//     catch(error){
//         console.log(error)
//         alert("zabranjen ulazak")
//     }
// }
// personAge = prompt("Unesi koliko imas godina")
// getData(Number(personAge));


async function fetchUsers(){
    try{
            console.log("Slanje zahtjeva...");
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            
            if(!response.ok){
                throw new Error("error :",response.status);
            }
            const users = await response.json();
            console.log("Users: ",users);
    }
    catch(error){
            console.log(error)
    }
}
fetchUsers()