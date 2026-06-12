// let fullName : string = "Maheen Zuhra"; //type annotation
// console.log(fullName);
// // explicity type of annotation best approach
// let age : number = 20;
// // implicit type of annotation
// let isStudent = true;
// // Fresh objects
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// function printLabel(labelObject:{label : string}){
//     console.log(labelObject.label);
// }
// printLabel({label : "hello"});
// function count(fullName : string){
//     console.log(`${fullName} hello`);
// }
// count("Maheen Zuhra");
// interfeces
// interface User {
//     name : string,
//     rollNo : number,
//     isActive : boolean
// }
// let  user :User={
//     name:"Maheen",
//     rollNo:1,
//     isActive:true
// }
// console.log(user);
//  classes
// class Person{
//     name : string;
//     rollNo : number;
//     isActive : boolean;
//     constructor(name : string,rollNo : number,isActive : boolean){
//         this.name = name;
//         this.rollNo = rollNo;
//         this.isActive = isActive;
//     }
// }
// let person = new Person("Maheen",1,true);
// console.log(person);
// // generics
// function taking <T>(value :T){
//     console.log(value);
// }
// taking("Maheen");
// taking(1);
// taking(true);
// Enums
// enum Color{
//     Red = "Red",
//     Green = "Green",
//     Blue = "Blue"
// }
// let myColor = Color.Green;
// console.log(myColor);
// unions
// let myValue : string | number | boolean;
// myValue = "Maheen";
// myValue = 1;
// intersections
// interface teacher{
//     name : string,
//     rollNo : number,
// }
// interface person{
//     isActive : boolean
// }
// let teacher : teacher & person = {
//     name : "Maheen",
//     rollNo : 1,
//     isActive : true
// }
// typeguard ye suggestion dega
// let myName :string = "Maheen";
// myName.toUpperCase();
// decorator
function hellow(target) {
    console.log(target);
}
let Sturdent = class Sturdent {
    name;
    rollNo;
    isActive;
    constructor(name, rollNo, isActive) {
        this.name = name;
        this.rollNo = rollNo;
        this.isActive = isActive;
    }
};
Sturdent = __decorate([
    hellow
], Sturdent);
const student = new Sturdent("Maheen", 1, true);
console.log(student);
export {};
//# sourceMappingURL=app.js.map