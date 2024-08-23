//Q1

// let num=50;
// if(num%10===0){
//     console.log("good");
// }else{
//     console.log("bad");
// }

//Q2
// let name=prompt("Enter your name ..");
// let age=prompt("Enter your age");
// let msg=`${name} is ${age} years old`;
// alert(msg);
// console.log(msg);

//Q3

// let month="January";

// switch(month){
//     case "January":
//     case "Feburary":
//     case "March":
//         console.log("Quater 1");
//         break;
//     case "April":
//     case "May":
//     case "June":
//         console.log("Quater 2");
//         break;
//     case "July":
//     case "August":
//     case "September":
//         console.log("Quater 3");
//         break;
//     case "October":
//     case "November":
//     case "December":
//         console.log("Quater 4");
//         break;
//     default:
//         console.log("Wrong month");
// }

// //Q4

// let str="apartment";
// if((str[0]==='A' || str[0]==='a')&&str.length>5){
//     console.log("Golden string");
// }else{
//     console.log("Not a golden string");
// }

//Q5 
// let num1=4;
// let num2=2;
// let num3=7;

// if(num1>num2){
//     if(num1>num3){
//         console.log("Num1 is greatest");
//     }else{
//         console.log("Num3 is graetest");
//     }
// }else{
//     if(num2>num3){
//         console.log("Num2 is greatest");
//     }else{
//         console.log("Num3 is greatest");
//     }
// }

// let str1="";
// let str2="";
// let num1=31;
// let num2=49382;
// str1+=num1;
// str2+=num2;
// if(str1[str1.length-1]===str2[str2.length-1]){
//     console.log("Both number have same last digit");
// }else{
//     console.log("Both number doesn't have same last digit");
// }

//Q1 js4

// let arr=[1,2,3,4,5,6,2,3];
// let num=2;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// let num1=103456;
// let count=0,sum=0;
// while(num1>=1){
//     let temp=num1%10;
//     sum+=temp;
//     num1/=10;
//     count++;
//     console.log(sum,count,num1);
    
// }
// console.log(count,sum);

// let num2=prompt("Enter the number to find factorial");
// num2=parseInt(num2);
// let fact=1;
// for(let i=1;i<=num2;i++){
//     fact*=i;
// }
// console.log(fact);

// let maxNum=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>maxNum){
//         maxNum=arr[i];
//     }
// }
// console.log("Max num is : ",maxNum);