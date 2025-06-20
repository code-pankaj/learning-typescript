class User {
    email: string
    name: string
    constructor(email:string, name: string){
        this.email = email
        this.name = name
    }
}

const newUser = new User("pankaj@gmail.com", "Pankaj")

export {}