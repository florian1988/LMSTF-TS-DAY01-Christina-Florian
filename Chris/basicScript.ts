let numbers: Array<number> = [1,2,3,4,5,6,7,8,9,10];

for(let value of numbers){
    for (let val10 of numbers){
        document.write(val10 + " x " + value + " = " + (val10 * value) + "<br>");
    }
}



// let result : " ";
// for(let i=1; i<numbers.length; i++){
//     for (let j=1; j<numbers.length; j++){
//         result +=(i*j);
//     }
//    return result;
// }
// console.log(numbers);

