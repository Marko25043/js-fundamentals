let p1={
    name:'marko',
    age:'20',
    id:'1234',
    print:function(){
        console.log(this.name +" age : "+this.age+' id:'+this.id);
    }
}
// p1.print();
let p2={
    name:'ivan',
    age:'20',
    id:'12121'
}
//posudivanje metode print od drugog objekta
// p1.print.call(p2);

//Rad sa fjom iste objekte koristimo p1,p2

let printStudent=function(town,country){
    console.log(this.name +" age : "+this.age+' id:'+this.id + " "+town+" "+country);
};

// printStudent.call(p1,'split','Croatia')

// printStudent.apply(p1,['Zagreb','Croatia'])

//vezi za objekt metodu i kasnije pozovi 
//daje kopiju metode koja se kasnije moze pozvat
let printDetails=printStudent.bind(p1,'split','Croatia')
console.log(printDetails)
// printDetails()


//arrow functions 

let student={
    name:'marko',
    age:'20',
    id:'123445',
    /*printDetails:function(){
        console.log(this) //ispis objekt 
    }
    printDetails:()=>{
        console.log(this) //ispis:window
    }*/
    //kod normalne fje this se automatski kreira 
    //arrow fja ne kreira svoju this varijablu
    printDetails:function(){
            const printDetails2=()=>{
                console.log(this)
            }
        printDetails2()
    }

}
student.printDetails()

class Student{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
    printDetails=()=>{
        console.log(this.name+" "+this.id)
    }
    print=function(){
        console.log(this.name+" "+this.id)
    }
}
st1=new Student('Marko','12334')
st1.printDetails(); //Ispis Marko 12334 ,arrow fja radi jer je this pokazivao na objekt st1 
//Arrow fja nasljeduje this , function imaju svoj this
st1.print()//isti ispis 
