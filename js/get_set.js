//constructor function
/*function Auto(marka,model,godina,broj_kilometara){
        let potrosnja=7

        this.marka=marka
        this.model=model
        this.godina=godina
        this.broj_kilometara=broj_kilometara

        let izracunPotrosnje=function(){
            ukPotrosnja=(broj_kilometara/100) * potrosnja;
            console.log(`Potrosnja za ${this.marka} ${this.model} je ${ukPotrosnja} `)
        }   

        this.getPotrosnja=function(){
            return potrosnja
        }

        Object.defineProperty(this,'izracunPotrosnje',{
            get:function(){
                return izracunPotrosnje
            }
        })
}
const a1=new Auto('bmw','116d','2020',300)
const a2=new Auto('audi','a3','2020',400)
console.log(a1.getPotrosnja())
a1.izracunPotrosnje()

*/
//factory function

function Auto(marka,model,godina,brojKilometara){
    let potrosnja=8

    let izracunPotrosnje=function(){
        ukPotrosnja=(brojKilometara/100) * potrosnja;
        console.log(`Potrosnja za ${marka} ${model} je ${ukPotrosnja} `)
    }

    return{
        marka:marka,
        godina:godina,
        model:model,
        brojKilometara:brojKilometara,

        getPotrosnja:function(){
            return potrosnja;
        },
        getIzracunPotrosnja:function(){
            return izracunPotrosnje()
        }
    }
    

}
const a1=new Auto('bmw','116d','2020',300)
const a2=new Auto('audi','a3','2020',400)

console.log(a1.getPotrosnja())
a1.getIzracunPotrosnja()