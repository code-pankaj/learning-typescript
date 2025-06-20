interface User{
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

// In operator Narrowing
function isAdminAccount (account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}



export {}