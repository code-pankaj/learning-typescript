function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val:any):any{
    return val
}


// it is better than any as it logs the details 

function identityThree<Type>(val:Type):Type{
    return val
}

identityThree(3)
identityThree("3")


// we can write anything here T,H,anything but all three must be same
function identityFour<T>(val:T):T{
    return val
}


function getSearchProducts<T>(products: T[]): T{
    return products[3]
}


// arrow function using generics
const getMoreProducts = <T>(products:T[]): T => {
    return products[2]
}

// here i used a comma after T it just a syntax people use to represent that it is a generic not a component of react
const getMoreInfoProducts = <T,>(products:T[]): T => {
    return products[2]
}

interface Database{
    id: number,
    username: string
}

function anotherFuntion<T, U extends Database>(valOne:T, valTwo:U):object{ 
    return {
        valOne,
        valTwo
    }
}

// anotherFuntion(4, "5")
anotherFuntion(4, {id: 5, username: "pankaj"})