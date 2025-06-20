var myUser = {
    _id: "42069",
    name: "John",
    email: "john@gmail.com",
    isActive: false
};
console.log(myUser);
myUser.email = "john123@gmail.com";
// myUser._id = "12345" --> READONLY
console.log(myUser);
