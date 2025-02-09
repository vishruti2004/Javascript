function addnumber(no1,no2)
{
    console.log(no1+no2);
    
}

addnumber(4,6)

function addnum(no1,no2)
{
    const result = no1+no2;
    return result;
}

const result = addnum(4,5)
console.log("result",result);

function loginuser(username)
{
    return `${username} just logged in`
}

console.log(loginuser("vishu"));

//spread operator

// function calculatecartprice(...num1)
// {
//     return num1
// }
// console.log(calculatecartprice(200,400,600));

//rest operator
function calculatecartprice(val1,val2,...num1)
{
    return num1
}
console.log(calculatecartprice(200,400,600,800));

//object halndel using function

const user = {
    name:"vishu",
    class:"mca"
}

function halndelobject(anyobject)
{
    console.log(`username is ${anyobject.name} and class is ${anyobject.class}`);
    
}

halndelobject(user)

const marks = [100,200,300]

function secondvalue(getvalue)
{
    return getvalue[1]
}

console.log(secondvalue(marks));
