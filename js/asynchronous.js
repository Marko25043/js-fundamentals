
/*console.log('t')
console.log('t2')

setTimeout(()=>{


    console.log("test")
},4000)

console.log('t3')
console.log('t4')*/
//slanje fje kao argument
/*
function one(call_two){
    console.log('step 1 complete call step 2!')
    call_two();
}

function two(){
    console.log('step 2')
}
one(two);
*/

let stocks={
    Fruits:['strawberry','grapes','banana'],
    liquid:['water','ice'],
    holder:['stick','cup'],
    toppings:['chockolate','peanuts']
}
/*
let order=(FruitName,callProduction)=>{
    setTimeout(()=>{
        console.log(`${stocks.Fruits[FruitName]} was selected`)
        callProduction()
    },2000);
    
    

};
//callback Hell

let production=()=>{

    setTimeout(()=>{
        console.log('production has started')
        setTimeout(()=>{
            console.log('the fruit has been chopped')

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
            
                setTimeout(()=>{
                    console.log('the machine was started');

                    setTimeout(()=>{
                        console.log(`${stocks.holder[0]}`)
                        
                        setTimeout(()=>{
                            console.log(`topping: ${stocks.toppings[0]}`)

                            setTimeout(()=>{
                                console.log(`order completed`)
                            },3000)
                        },3000)

                    },2000)

                },1000)
            
            },1000)

        },2000)
        
    },0);

};
order(0,production)*/
//promise
/*
let IsShopOpen=true
//let IsShopOpen=false //tada ce se pozvat catch 
let order=(time,work)=>{
    return new Promise((resolve,reject)=>{
        if(IsShopOpen){
            setTimeout(()=>{
                resolve(work())
            },time);

           
        }



        else{
            reject(console.log('our shop is closed'))
        }

    });
};
order(2000,()=>console.log(`${stocks.Fruits[0]}`))

.then(()=>{
    return order(0,()=>console.log('production has started'));
})

.then(()=>{
    return order(2000,()=>console.log('the fruit has chopped'));
})

.then(()=>{
    return order(1000,()=>console.log(`${stocks.liquid[0]},${stocks.liquid[1]} selected`))
})
.then(()=>{
    return order(1000,()=>console.log('start the machine'));
})//... Proces isti sve do zavrsetka

.catch(()=>{
    console.log('Customer left')
})
.finally(()=>{
    console.log('day ended,shop is closed')
});*/


// let order=()=>{
//     return new Promise((resolve,reject)=>{
//         if(true){
//            resolve() 
//         }
//         else{
//             reject()
//         }
//     })
// }
// order()
// .then()
// .then()
// .then()
// .catch()
// .finally()

/*
async function order(){
    try{
        await abc
    }
    catch(error){
        console.log('abc doesnt exist',error)
    }
    finally{
        console.log('runs code anyways')
    }
}
order()
.then(()=>{
    console.log('asasasas')
})

let toppingsChoice=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(
                console.log('which topping would you like'));
            
        },3000);
    });
}
async function kitchen(){
    console.log('a')
    console.log('b')
    console.log('c')

    await toppingsChoice()
    console.log('d')
    console.log('e')
    
}
kitchen()
console.log('cleaning the dishes');*/
/*
let IsShopOpen=true;
// let IsShopOpen=false pokretanje rejecta i catcha
function time(ms){
    return new Promise((resolve,reject)=>{
        if(IsShopOpen){
            setTimeout(resolve,ms)
        }else{
            reject(console.log('shop is closed'))
        }

    });
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]}`)

        await time(3000)
        console.log('start the production')
        //..............
        //sad samo mozemo korake proizvodenje pod razlicitim vremenima

    }
    catch(error){
        console.log('customer left',error);
    }
    finally{
        console.log('day is ended,shop is closed');
    }
}
kitchen();*/

let takeOrder=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log('Dobar dan sto zelite naruciti'))
        },7000);
    });
}
async function kitchen(){
    console.log('jelo1 se kuva')
    console.log('jelo2 se pece')
    await takeOrder()
    console.log('kuhar primio narudzbu vratio se nazad')
    console.log('isjeci povrce')
    console.log('stavit kuhat manistru')

}
kitchen()
console.log('cistac cisti restoran')
