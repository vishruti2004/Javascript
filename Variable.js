console.log("jay swaminarayan");

const account_id = 12345;
let account_email = "abc@gmail.com";
const account_password='6767';
account_city="surat";
let account_state;

//account_id="8989"; //not allow

/*prefer not use var because of isue in block scope and functional scope */
account_city="gandhinagar";

console.log(account_id)
console.table([account_email,account_password,account_city,account_state]);