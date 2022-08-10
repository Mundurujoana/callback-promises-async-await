
//Callback functions
// function myFirst(){
// console.log('values1');
// displayData(' love you all!');
// }
// mysecond();

// function mysecond (){
//     // console.log('values2');
//     displayData('hello everyone!');
// }
// myFirst();

// function displayData (data){
//     console.log(data);
// };

// function addNums (a,b){
// var sum = a+b;
// displayData(sum);
// }
// addNums(30,30);

// function displayData (data){
//     console.log(data);
// };

// function addNums (a,b,myCallback){
//     var sum = a+b;
//     myCallback(sum);
//     }
//     addNums(30,30,displayData);
    
//     function displayData (data){
//         console.log(data);
//     };

//program to find the sum and average of two numbers using callback functions
function calculateSum(n,myCallback) {
    let i;
    let sum = 0;
 for(i = 0; i < n; i++){
    sum += i
 };
 console.log(`The sum: ${sum}`);
myCallback(sum);

};

let n= 10;
calculateSum(n,function(sum){
console.log(`The average is: ${sum/n}`);
});