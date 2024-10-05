function enterNumbers(){
        let sumEven=0,sumOdd=0;
    
        const checkNumber=(num)=>{
            if(num%2==0){
                sumEven+=Number(num)
            }
            else{
                sumOdd+=Number(num);
            }

        }

        const getValues=()=>{
            return{sumEven,sumOdd}
        }


    return {checkNumber,getValues}

}
const check=enterNumbers();
// do{
//     num=Number(prompt('unesi broj'));
//     if(num!=0){
//         check.checkNumber(num);
//     }
    
    

// }while(Number(num)!=0);

// console.log("suma parni"+check.getValues().sumEven)


const print=()=>{
    let parag="test";
    return()=>{
        parag='test_inner';
        return parag;
    }
}
let outer=print()
console.log(outer())