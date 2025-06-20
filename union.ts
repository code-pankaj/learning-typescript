let score: number | string = 33

score = 45
score = "55"

type User = {
    name: string,
    id: number,
}

type Admin = {
    username: string,
    id: number
}

let Pankaj: User | Admin = {name: "Pankaj", id: 420, username: "code-pankaj"}

console.log(Pankaj)

function getDB(id: string | number ){ 
    if(typeof id === "string"){
        id.toLowerCase();
    }
    else {
        id + 3
    }
}

const data1: number[] = [1,2,3]
const data2: string[] = ['1','2','3']
// const data3: string[] | number[] = [1,2,'3']

const data4: (string | number)[] = [1,2,'3']

// const data5: any[] = [1,2,3]

let pi:3.14 = 3.14

// pi = 3.145

export {}