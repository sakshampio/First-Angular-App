type fruit = {
  name : string,
  taste: string,
  price?: number | null  //'|' this is pipe operatior 
}

let fruit1 : fruit ={
    name: 'mango',
    taste: "sweet",
    price: 10
}


console.log(fruit1.price);

let fruit2 : fruit = {
    name : 'orange',
    taste : 'saur',
    // price : null if we don't decleare this then it willl throw an error so for this we can made fiece optional by add '?'

}
console.log(fruit2.price); 

function getPrice(price : number,discount?: number ){
    return price + discount!;
}
 
// console.log(getPrice(10));
// console.log(getPrice(fruit1.price));
console.log(getPrice(fruit2.price!));


