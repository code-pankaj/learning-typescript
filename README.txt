// Notes are present in this file -- > 

---> Types & Inference <---  

let variableName: Type = value; --> tpyes are string, number, boolean, etc..
                 ^ we can avoid that type in someplaces ts will automatically knows like js that we are using string, num or boolean [This is known as TYPE INFERENCE ]
But in somecases it is compulsory to use them

// let name: string = "Pankaj" --> Explicit Typing

// let age = 19 --> Implicit Typing


export {} --> What does this do ??


---> Functions <---


// "use strict"; --> This line is not explicitly added in the function.js after transpilation, but it is implied in the generated JavaScript code when using TypeScript with the "module" option set to "commonjs" or "esnext".
// This line is not explicitly present in the TypeScript code, but it is a common practice
// in JavaScript to enable strict mode, which helps catch common coding errors and "unsafe"
// actions, such as using undeclared variables or assigning values to read-only properties.


// Object.defineProperty(exports, "__esModule", { value: true }); --> This line will be added in the function.js after transpilation

// This above line will typically added by TypeScript transpilation when converting TypeScript modules to CommonJS format:

// It marks the JavaScript module as originating from an ES module
// exports is the CommonJS module.exports object
// The property __esModule with value true is added to the exports object
// This flag helps module systems distinguish between ES modules and CommonJS modules
// This is particularly important when using features like default exports, as it helps maintain compatibility between ES modules and CommonJS modules in environments that support both module systems.


// function add(num:number):number{
    return num + 5;
}

above the outside number represents the return type

// There will be cases where we will be returning multiple types will learn that later only


---> Objects <---




---> Types Alias <---

type myString = string 
// now you can use myString at the place of string 

type User = {
    name: string,
    age: number,
    email: string,
}

function createUser(user: User){}
// Here above i created my own type User then the user in the function should follow that convention


-->  READONLY <---

if we put readonly in front of a variable or type it will not be changed 
we can also do optional for a type like if user have a credit card or not by just putting a question mark in front
type User = {
    readonly _id: string
    name: string,
    email: string,
    isActive: boolean,
    creditCardNumber?: number
}


---> Arrays <---

let superheroes: string[] = ["thor", "ironman", "spiderman"]

let heroPower: Array<string> = ["lightning", "intelligence", "danger-sensor"]

let variableName: Array<Type> =[]


---> Union <---

allow multiple types 

let score: number | string = 33 


---> Tuples <---

Tuples help in ordering the data

first string then number and so only


---> Enums <---


Gives us options 

---> Interface <---


mostly similar to type or class 

interface can be reopened and added new properties but in types we can't do that 


---> Classes <---


class User {
    email: string
    name: string
    constructor(email:string, name: string){
        this.email = email
        this.name = name
    }
}

const newUser = new User("pankaj@gmail.com", "Pankaj")


---> Why Interface are better <---

nothing here yet



---> Interface, Class, Type Difference <---

nothing here too..



---> Abstract <---

didn't understand much here 



---> Generics <---

to reuse the code 

function name<Type>(arg: Type): Type{
    return arg
}

we can write anything at the place of type just make sure the three match and it is better than any as it logs all the details

we can also make our own interface then pass it as a type 


---> Narrowing <---


---> Typeof, Instanceof <---


Instanceof helps us check if the type was a instance of something like date, array or interface 


---> Type Predicates <---



---> Discriminated Union <---

