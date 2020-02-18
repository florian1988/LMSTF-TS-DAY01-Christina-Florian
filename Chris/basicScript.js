var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var value = numbers_1[_i];
    for (var _a = 0, numbers_2 = numbers; _a < numbers_2.length; _a++) {
        var val10 = numbers_2[_a];
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
