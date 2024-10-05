let cars=new Map(
    [
        ['bmw','116d'],
        ['audi','a3'],
        ['porsche','911']

]);
cars.set('bmw','118d')
cars.set('porsche1',{model:'panamera',color:'black'});

// console.log(cars.get('porsche'))

//kad nam value nije objekt:
/*cars.forEach((value,key)=>{
    console.log(`Marka: ${key} Model: ${value} `)

});
*/
//kada kombiniramo value da nam je objekt ili string 

cars.forEach((value,key)=>{
    // console.log('tip podatka value je :',typeof(value)) dat ce string ako imamo >1 bit ce objekt 
    if(typeof(value)==='object'){
        console.log(`Marka: ${key} Model: ${value.model} Boja:${value.color} `)
    }
    else{
        console.log(`Marka: ${key} Model: ${value}`);
    }
});

//Operacija
/*
cars.size
cars.delete('audi')
cars.clear()//brisanje svih elemenata
cars.has()//postoji li key
typeof cars //vraca nam objekt
*/

const contacts=new Map();

contacts.set('Marko',{phone:'09867555',town:'Split'});
contacts.set('Ivan',{phone:'09812125',town:'Kastela'});
contacts.set('Toma',{phone:'0986721215',town:'Kastela'});


for(const el of contacts.entries()){  //parovi key value

    console.log(el[0],el[1].phone,el[1].town)
}
for(const el of contacts.values()){   //ispis vrijednosti 
    console.log(typeof(el)) //rezultat je objekt
    console.log(el.phone,el.town) //ispis vrijednosti objekta
}
console.log('velicina kontakata',contacts.size)
contacts.delete('Marko')
console.log('velicina kontakata nakon brisanja',contacts.size)
console.log('dohvacanje podataka jednog objekta: ',contacts.get('Ivan'))