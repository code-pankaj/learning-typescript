const User:{name:string, age:number, email:string} = {
    name: "Pankaj",
    age: 19,
    email: "pankaj@gmail.com"
}

function createUser({name, age, email}: {name: string, age: number, email: string}): void{
    
}

createUser({name: "John", age: 20, email: "john@gmail.com"})

function createCourse():{name: string, age: number, email: string}{
    return {name: "Raju", age: 25, email: "raju@gmail.com"}
}

function createCourseTwo(name: string, age: number, email: string):{name: string, age: number, email: string}{
    return {name: "Raju", age: 25, email: "raju@gmail.com"}
} 

type User = {
    name: string,
    age: number
}

function newUser(user: User): User{
    return {name: user.name, age: user.age}
}

newUser({name:"Pankaj", age:19})



export {}