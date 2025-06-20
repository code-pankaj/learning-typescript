"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 45;
score = "55";
var Pankaj = { name: "Pankaj", id: 420, username: "code-pankaj" };
console.log(Pankaj);
function getDB(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 3;
    }
}
var data1 = [1, 2, 3];
var data2 = ['1', '2', '3'];
// const data3: string[] | number[] = [1,2,'3']
var data4 = [1, 2, '3'];
// const data5: any[] = [1,2,3]
var pi = 3.14;
