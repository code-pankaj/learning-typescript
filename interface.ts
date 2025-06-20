interface User {
    readonly dbId: number,
    name: string,
    email: string,
    userId: number,
    googleId?: string,
    startTrial(): string,
    getCoupon(couponName: string): number,
    example?: () => string,
}

// reopening of the interface

interface User { 
    githubToken?: string,
}

interface Admin extends User {
    name: string,
    role: string,
}

const newUser: Admin = {dbId: 1, name: "Pankaj", email: "pankaj@gmail.com", userId: 123, 
    startTrial:() => {
        return "started"
    },
    role: "admin",
    getCoupon(name: "newbie"){
        return 10
    }
}

export {}