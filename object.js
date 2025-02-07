// const details = 
// {
//     name:"vishruti",
//     surname:"malaviya",
//     email:"vishu@gmail.com",
//     phone:1234567893,
//     address:"surat"
// }
// console.log(details.name)
// console.log(details["name"])
// console.log(details.address)

// details.email = "vishrutimalaviya282@gmai.com";
// //Object.freeze(details);
// console.log(details);


// details.username = function()
// {
//     console.log("hellow user")
// }
// console.log(details.username)

// details.username2 = function ()
// {
//     console.log(`hello user, ${this.name}`)
// }
// console.log(details.username2)

//singleton object 
const singleton = new Object()
const nonsingleton = {}
console.log(singleton);
console.log(nonsingleton);


const regularuser=
{
    id : 123,
    name : "vishu",
    email : "vishu@gmail,com",
    address:"surat",
    fullname :
    {
        surname:"malaviya",
        name:"vishruti"
    }
}

console.log(regularuser.fullname.surname)


const obj1 = {a:1,b:2}
const obj2 = {x:1,y:2}

const obj3 = Object.assign(obj1,obj2);
console.log(obj3);

