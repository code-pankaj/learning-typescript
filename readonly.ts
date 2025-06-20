type User = {
    readonly _id: string
    name: string,
    email: string,
    isActive: boolean
    creditCardNumber?: number // this question mark let us give option if we have the thing or not and don't give error
}

let myUser: User = {
    _id: "42069",
    name: "John",
    email: "john@gmail.com",
    isActive: false
}

console.log(myUser)

myUser.email = "john123@gmail.com"
// myUser._id = "12345" --> READONLY

console.log(myUser)

// mix and match

type creditNumber = {
    cardNumber: number,
}

type creditDate = {
    cardDate: number,
}

type creditDetails = creditDate & creditNumber & {
    cvv: number
}