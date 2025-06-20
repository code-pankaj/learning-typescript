"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Pankaj",
    age: 19,
    email: "pankaj@gmail.com"
};
function createUser(_a) {
    var name = _a.name, age = _a.age, email = _a.email;
}
createUser({ name: "John", age: 20, email: "john@gmail.com" });
function createCourse() {
    return { name: "Raju", age: 25, email: "raju@gmail.com" };
}
function createCourseTwo(name, age, email) {
    return { name: "Raju", age: 25, email: "raju@gmail.com" };
}
function newUser(user) {
    return { name: user.name, age: user.age };
}
newUser({ name: "Pankaj", age: 19 });
