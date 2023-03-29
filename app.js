
/*
const a = new Date();
console.log(a.getFullYear());
//console.dir(a);

//찾아서 바꾸지 않는 이상 바뀌지 않는다.
// const b = {
//     year : 2023,
//     month : 3,
//     day : 29
// }

// console.log(b.year + "년도");
*/

/*
function c(a,b,c){
        this.year = a;
        this.month = b;
        this.day = c;
    }

const test = c(2023,3,29).year;
console.log(test);
*/

const fs = require('fs');


function user(id,password,email){
    this.id = id;
    this.password = password;
    this.email = email;
}

const d = new user('jin','1234','ellenher@naver.com');
const e = new user('daljae','5678','daljaepark@naver.com');
const f = new user('jieun','9101','jieun@naver.com');
console.log(d);
console.log(e);
console.log(f);




let names = ['jin','daljae','jieun'];
let passwords = ['1234','5678','9101'];
let emails = ['ellenher@naver.com','daljaepark@naver.com','jieun@naver.com'];

let members = [];
for(let i = 0; i < 3; i++){
    members.push(new user(names[i], passwords[i], emails[i]));
}

fs.writeFileSync('members.JSON',JSON.stringify(members, null, 2), "utf-8");

console.dir(members);