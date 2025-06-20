class User {
    private _courseCount: number = 1
    private email: string
    public name: string
    private city: string = "Rewari"
    constructor(email:string, name: string){
        this.email = email
        this.name = name
    }

    get getAppleEmail():string{
        return `apple${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }

    // setter have no return type
    set courseCount(courseNum){
        if(this._courseCount <= 1){
            throw new Error("Course should be more than one")
        }
        this._courseCount = courseNum
    }   
}

const newUser = new User("pankaj@gmail.com", "Pankaj")

export {}