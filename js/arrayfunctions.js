
const movies=[
    {
        movieName:'Titanic',
        duration:'200'
    },
    {
        movieName:'Cars2',
        duration:'120'
    },
    {
        movieName:'FF',
        duration:'150'
}];

let movieNames=movies.map((movie)=>{
    return movie.movieName;
})
console.log(movieNames)

const words=['car','cat','apple','JS'];

/*let results=words.filter((word)=>{
    return word.length >2 ;
})*/
//ako imamo samo jednu liniju mozemo pisat krace
let results=words.filter(word=>word.length>2);
console.log(results)

//Reduce - vise nizova reducira na jednu vrijednost
//1.nacin -klasicna iteracija
let total=0;
for (let el of movies){
    total+=Number(el.duration);
}
console.log('Ukupno trajanje svih filmova ',total+' min');
//2.nacin -koristenje reduce
/*
let totalTime=tasks.reduce(function(previousIterationsValue,task,index){

});
// previousIterationsValue je kao total=total+
*/
let totalTime=movies.reduce(function(total,movie){
        return total+Number(movie.duration);
},0)
console.log('ukupno vrijeme je ',totalTime)


//Rad sa Nizovima
let arr=[1,2,3,4,5]

//dodaj na kraj
arr.push(6);

//na pocetak dodaj
arr.unshift(0)

//brisanje sa kraja
arr.pop()

//predzadnje mjesto dodavanje
arr[arr.length-2]=22

//zbroji sve elemente
let suma=arr.reduce((total,element)=>{
        return total+element;
},0);

console.log(arr)
//brisi odakle-dokle samo prvi indeks:
arr.splice(1,1)

console.log(arr)

//izbrisi cijeli niz
arr.splice(0)
console.log(arr)
arr=[1,2,3,4,5,6]
//izmijeni drugi element
arr.splice(1,1,8)
console.log(arr)