
//Array
//core java array=> int a[5],int [5]a;
//typescript
var a=[2,3,4,5];
var a1:number[];
var a1:number[]=[3,4,5,6,7,8];
var a3:number[]=[];
var a4=[];

// for (let i = 0; i < a.length; i++) {
//    console.log(`
//         value of a[${i}]=${a[i]} whose index is ${i}
//    `)    
// }

// console.log("Array value is "+a);
// console.log("Array value is "+a.join('  '));
// console.log("Array value is "+a.join('#'));
// console.log("Array value is "+a.join('\n'));// Its for console


//foreach

var b=[11,22,33,44];
b.forEach((myvalue,i)=>{
    // console.log("Value is "+myvalue+" index is "+i)
});

//Rest Parameter function

function disp(...item:number[]){
    console.log(item);
}

disp(4,5);
disp(10,12,13,14,15,16);

