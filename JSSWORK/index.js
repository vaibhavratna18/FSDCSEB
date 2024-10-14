// console.log("Welcome to JSSWORK");
// var a=12;
// console.log(a);
// if(a>10){
//     let b=23;
//     a=40;
//      console.log("a is inside the condition"+a);
// }
// console.log("a is outside the condition"+a);

let a=12;
let b="12";
console.log(typeof b);
let today=Date();
console.log(today);


if(a===b){
    console.log("welcome");

}
else{
    console.log("Hello");
}

let myname="vaibhav";
let college="ABES";
let result=`My name is ${myname} and i am from ${college}`;
console.log(result);

//Objects in js

const students={
    sname:"vaibhav",
    age:21,
    college:"ABESEC",
    course:"Btech"
}
console.log(students);


//Objects in js
//let key="sname";
const student = [
    {
        sname: "vaibhav",
        college: "ABESEC",
        course: "Btech"
    },
    {
        sname: "Deepak",
        age: 31,
        college: "ABESIT",
        course: "BBA"
    }
];

console.log(student[1].sname + " " + student[1].college);

function greeting(){
    console.log("Hello JS from Vaibhav");
}
greeting();

// console.log("name: "+student.sname+"   " +"course: "+students.course);
// const{sname,course} = student;
// console.log(sname+" "+course);

// console.log(sname);
// student[key]="Ratna";
// console.log(student);