



// let a=45;
// let b=4;
// function sum(a:number,b:number):number{
//     return a+b;
// }


// console.log(sum(a,b))

// function total(numbers:number[]){
//     return numbers.reduce((acc,item)=>{
//         return acc+item;
//     },0)
// }

// console.log(total([]))

// type alias

// type Student={
//     name:string;
//     age:number;
//     rollno:number;
//     parentsname?:string;
// }

// const shivam:Student={
//     name:"shivam",
//     age:20,
//     rollno:23
// }
// function register(studentdata:Student):Student{
//     return studentdata;
// }

// // console.log(register(shivam))

// const student1 =register(shivam)


// interface Transaction{
//     senderaccountnumber:number;
//     receiveraccountnumber:number;
// }


// const transacion1:Transaction={
//     senderaccountnumber:8923782,
//     receiveraccountnumber:98965896
// }
// const transacion2:Transaction={
//     senderaccountnumber:8923782,
//     receiveraccountnumber:98965893
// }

// interface BankAccount {
//     accountnumber:number;
//     accountholder:string
//     balance:number;
//     isactive:boolean;
//     transactions:Transaction[];
// }


// const bankaccount :BankAccount ={
//     accountnumber:8783468734673,
//     accountholder:"simplyjs",
//     balance:123712,
//     isactive:true,
//     transactions:[transacion1,transacion2]
// }

// interface Book{
//     name:string;
//     price:number;
// }
// interface Ebook extends Book{
//     filesize:number,
//     format:string
// }
// interface Audiobook extends Ebook{
//     duration:number
// }

// const book:Audiobook={
//    name:"how to think like programmer",
//    price:1000,
//    filesize:12,
//    format:"doc",
//    duration:3
// }

// merge two interface
// interface Book{
//     name:string;
//     price:number;
// }

// interface Book{
//     size:number,
//     page:number
// }


// const boook1 :Book ={
//     name:"how to think like an code champion",
//     price:1000,
//     size:12,
//     page:220
// }


// limitation of type alias and interface
// type varibalestring = string; // primitive data type

// interface newstring=string; // inteface only works for object

// type ID = number | string;

// function printsomthing(id:ID){
//     if(typeof id ==="string"){
//     console.log(id.toUpperCase());
//     }
//     else{
//         console.log(id)
//     }
// }

// console.log(printsomthing("heelo"))

// function threeelement(x:string | number[]){
//     return x.slice(0,3)
// }

// console.log(threeelement("simplyjs"))

// generic
// gen genral

// function logstring(arg:string){
//     console.log(arg);
//     return arg;
// }

// function lognumber(arg:number){
//     console.log(arg);
//     return arg;
// }

// function logarray(arg:any[]){
//     console.log(arg);
//     return arg;
// }

// function loganything<T>(arg:T):T{
//     console.log(arg);
//     return arg;
// }


// // logstring("string")
// // lognumber(1)
// // logarray(["stringna",1,2])
// loganything([1,2,3])

// interface Hasage{
//     age:number
// }

// function oldest<T extends Hasage>(people:T[]):T{
//     return people.sort((a,b)=>b.age-a.age)[0];
// }

// const people:Hasage[] =[{age:20},{age:10},{age:30},{age:40}]
// oldest(people)

// interface Player{
//     name:string,
//     age:number
// }
// const Players:Player[] =[{name:"nandini",age:10},{name:"rohini",age:20},{name:"madhuri",age:30}]

// const person:Player =oldest(Players);


interface IPost{
    title:string;
    id:number;
    description:string;
}
interface IUser{
    name:string;
    age:number;
    id:number;
}


// async function fetchpostdata(path:string):Promise<IPost[]>{
//     const response =await fetch(`http://exampleurl.com${path}`)
//     return response.json()
// }
// async function fetchuserdata(path:string):Promise<IUser[]>{
//     const response =await fetch(`http://exampleurl.com${path}`)
//     return response.json()
// }

// genric function for url or fetch
// async function fetchdata<T>(path:string):Promise<T[]>{
//     const response =await fetch(`http://exampleurl.com${path}`)
//     return response.json()
// }


// (async()=>{
//    const users =await fetchdata<IUser>("/users")
//    const posts =await fetchdata<IPost>("/posts")
  
// })();

// duck typing

interface Icredntial{
    username:string;
    password:string;
    login(username:string,password:string):boolean
}

// function login(credtials:Icredntial):boolean{
//     console.log(credtials);
//     return true;
// }


const user:Icredntial ={
    username:"simplyjs",
    password:"secretpassword",
    login(username:"radhye",password:"radheypassword"){
        return true;
    }
}

// login(user)


