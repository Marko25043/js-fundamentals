//zad1
/*function Automobil(marka, model, godinaProizvodnje, trenutnaBrzina){
    this.marka = marka;
    this.model = model;
    this.godinaProizvodnje = godinaProizvodnje;
    this.trenutnaBrzina = trenutnaBrzina;
}

Automobil.prototype.dodajBrzinu=function(brzina){
    this.trenutnaBrzina +=brzina;
}
Automobil.prototype.prikaziBrzinu=function(){
      console.log(`Trenutna brzina je ${this.trenutnaBrzina}`)
}

const mojAutomobil = new Automobil("Bmw", "116d", 2015, 60)
mojAutomobil.dodajBrzinu(20)
mojAutomobil.prikaziBrzinu()

//zad2


function Vozilo(marka, godinaProizvodnje){
    this.marka = marka;
    this.godinaProizvodnje = godinaProizvodnje

    this.vozi=()=>{
        console.log(`Vozim ${this.marka} vozila godiste ${godinaProizvodnje}`)
    }
}

const v1 =  new Vozilo('bmw', 2010);
v1.vozi()

function Automobil(marka, godinaProizvodnje, boja , brojVrata){
    Vozilo.call(this, marka, godinaProizvodnje)
    this.boja = boja;
    this.brojVrata = brojVrata;

    this.parkiraj = ()=>{
        console.log(`Automobil ${this.marka} , ${boja} boje je parkiran`);
    }
}

const auto = new Automobil('BMW', 2022 , 'crna', 5)
auto.parkiraj()
auto.vozi()

function Motor(marka, godinaProizvodnje , tip){
    Vozilo.call(this, marka, godinaProizvodnje)
    this.tip = tip;

}
//ne koristit arrow fje kod prototipa 

// Motor.prototype.voziBrzo = ()=>{
//     console.log(`vozim motocikl tipa ${this.tip}, marke ${this.marka} i godiste ${this.godinaProizvodnje} brzo`);
// }
Motor.prototype.voziBrzo=function(){
    console.log(`vozim motocikl tipa ${this.tip}, marke ${this.marka} i godiste ${this.godinaProizvodnje} brzo`);
    
}

const motor = new Motor('Honda', 2020 , 'sportski')
motor.voziBrzo()
motor.vozi()


zad3



class Zaposlenik {
    constructor(ime, prezime, email, ocjenaSposobnosti) {
        this.ime = ime;
        this.prezime = prezime;
        this.email = email;
        this.ocjenaSposobnosti = ocjenaSposobnosti;
    }

    ispisi() {
        console.log(`${this.ime} ${this.prezime} ${this.email}`);
    }

    ocjenaSposobnost(ocjena) {
        this.ocjenaSposobnosti = ocjena;
    }
}

const zaposlenik1 = new Zaposlenik('Pero', 'Peric', 'pero.peric@gmail.com', 4);
zaposlenik1.ispisi();
zaposlenik1.ocjenaSposobnost(5);

class Programer extends Zaposlenik {
    constructor(ime, prezime, email, ocjenaSposobnosti, programskiJezik) {
        super(ime, prezime, email, ocjenaSposobnosti);
        this.programskiJezik = programskiJezik;
    }

    ispisi() {
        super.ispisi();
        console.log(`Programski jezik: ${this.programskiJezik}`);
    }
}

const programer1 = new Programer('Marko', 'Markić', 'marko.markic@example.com', 4, 'JavaScript');
programer1.ispisi();

class Dizajner extends Zaposlenik {
    constructor(ime, prezime, email, ocjenaSposobnosti, program) {
        super(ime, prezime, email, ocjenaSposobnosti);
        this.program = program;
    }

    ispisi() {
        super.ispisi();
        console.log(`Program: ${this.program}`);
    }
}
const dizajner1 = new Dizajner('Ana', 'Anić', 'ana.anic@example.com',5, 'Adobe Photoshop');
dizajner1.ispisi();



//drugi nacin preko konstruktorske funkcije:


function Zaposlenik(ime, prezime, email, ocjenaSposobnosti) {
    this.ime = ime;
    this.prezime = prezime;
    this.email = email;
    this.ocjenaSposobnosti = ocjenaSposobnosti;
}

Zaposlenik.prototype.ispisi = function() {
    console.log(`${this.ime} ${this.prezime} ${this.email}`);
};

Zaposlenik.prototype.ocjenaSposobnost = function(ocjena) {
    this.ocjenaSposobnosti = ocjena;
};

const zaposlenik1 = new Zaposlenik('Pero', 'Peric', 'pero.peric@gmail.com', 4);
zaposlenik1.ispisi();
zaposlenik1.ocjenaSposobnost(5);

function Programer(ime, prezime, email, ocjenaSposobnosti, programskiJezik) {
    Zaposlenik.call(this, ime, prezime, email, ocjenaSposobnosti);
    this.programskiJezik = programskiJezik;

    this.ispisi = function() {
        Zaposlenik.prototype.ispisi.call(this);
        console.log(`Programski jezik: ${this.programskiJezik}`);
    };
}

const programer1 = new Programer('Marko', 'Markić', 'marko.markic@example.com', 4, 'JavaScript');
programer1.ispisi();*/
