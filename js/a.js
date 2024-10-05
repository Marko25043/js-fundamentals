//Factory Function

function createCircle(radius){
    return{
        radius:radius,
        draw:function(){
            console.log('draw');
        }
    }

}
const circle=createCircle(1);
circle.draw();

/******************************************************/
//Constructor Function
//this->referencira se na objekt koji izvrsava neki dio koda
//primjer:prazno kreirani objekt

function Circle(radius){
     this.radius=radius;
     let defaultLocation={x:0,y:0} //privatni clan

     this.getDefaultLocation=()=>{
        return defaultLocation;
     };
     this.draw=function(){
        console.log('draw2');
     }
     //nacin za prebacivanje privatne u public elementa
 
     Object.defineProperty(this,'defaultLocation',{
        get:function(){
            return defaultLocation;
        },
        set:function(value){
            //postavljanje uvjeta settera
            if(!value.x || !value.y)
                throw new Error('Invalid location.')
            defaultLocation=value;
        }
     });
}

const c1=new Circle(1);
//c1.getDefaultLocation();
//drugi nacin dohvacanja privatne
//console.log("privatni element",c1.defaultLocation);

//dodavanje elementa ili property naknadno
c1.location={x:1};
//drugi nacin za dodavanje elementa location
//c1['location']={x: 1};

//brisanje propertya ;npr kad zelimo korisniku poslat podatke al ne sve
delete c1['location'];

//petlja za objekt
for(let key in c1){
    if(typeof c1[key]!=='function'){
        console.log("ispis: ",key,c1[key]);
    }
}
const keys=Object.keys(c1);
console.log("svi kljucevi objekta",keys);

//provjera propertya
if('radius' in circle){
    console.log('Circle has a radius.');
}
//stoperica
function Stopwatch(){
    let startTime,endTime,running,duration=0;
    this.start=function(){
        if(running)
            throw new Error('Stopwatch has already start');
        running=true;
        startTime=new Date();

    };
    this.stop=function(){
        if(!running)
            throw new Error('Stopwatch is not started');
        running=false;
        
        endTime=new Date();

        const seconds=(endTime.getTime()-startTime.getTime())/1000;
        duration+=seconds;
    };
    this.reset=function(){
        startTime=null;
        endTime=null;
        running=false;
        duration=0;
    };
    Object.defineProperty(this,'duration',{
        get:function(){
            return duration;
        }
    });
}

/*function Student(name,id){
        this.name=name;
        this.id=id;
        //Privatni clan
        this.print_details=function(){
            console.log("Name:"+name ,"ID:"+id);
        }
}
const S1=new Student('Marko',5);
const S2=new Student('Ivan',6);
S1.print_details();
*/
/*
class Student{
    constructor(name,id){
        this.name=name
        this.id=id
    }
    print_details=()=>{
        console.log("Print:...");
    }
}
const S3=new Student("marko",11101);
S3.print_details();*/

//Nasljedivanje
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    print(){
        console.log("Name :"+this.name+ " Age "+this.age);
    }
}
let p1=new Person("Marko",20);
p1.print();

class Student extends Person{
    constructor(name,age,id){
        super(name,age);
        this.id=id;
    }
    print_details(){
        console.log("Name :"+this.name+ " Age "+this.age+"id: "+this.id);       
    }
}
let s1=new Student('Marko',20,'02341212');
s1.print_details();