function add(num: number):number{

    return num + 2

}

function signUp(name: string, email:string, password:string, isPaid: boolean){
     
}

let loginUser = (name: string, email: string, password: string, isPaid: boolean) => {}

console.log(add(5))

const heroes = ["thor", "spiderman", "ironman"]

heroes.map((hero:string):string => {
    return `hero is ${hero}`
})

function consoleError(errmsg:string):void{
    console.log(errmsg)
}

function handleError(errmsg:string):never{
    throw new Error(errmsg)
}

export {}
