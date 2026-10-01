
// console.log("Start");

// setTimeout(() => {
//     console.log("Middle");
// }, 1000);

// console.log("End");

// // output

// // start
// // end
// // middle 
// //  why is middle after the end 
// //  becouse Asynchronous JavaScript allows JavaScript to start a task and continue executing other code without waiting
// // for that task to finish 


// // Exercise 2 — Callback Practice

// function greetUser(name, callback) {
//     console.log ("hello ", name)
//     callback()
// }
// greetUser("Aman", function() {
//     console.log("Welcome to JavaScript");
// });


// // Exercise 3 — Async Callback
// function downloadFile(callback) {
//   console.log ("download start")
//   setTimeout(()=>{
//     console.log ("Download completed")

//   },2000)
// callback()
// }
// downloadFile(()=> {
//     console.log("proccesing the file");
// })

// // Exercise 4 — Create and Consume a Promise

// function checkNumber(number) {
//     return new Promise((resolve,reject)=>{
// if (number > 0){
//     resolve("positive number")
// }
// else{
//     reject("Invalid Number")
// }
//     })
// }
// checkNumber(10)
// .then((postive)=> {
//     console.log ("Result :",postive)
// })
// .catch((error)=> {
//     console.log ("Result :",error)
// })
// .finally(()=> {
//     console.log ("Process Finished")
// })


// // Exercise 5 — Promise with setTimeout

// function getUser() {
//     return new Promise((resolve,reject)=>{
      
// setTimeout((user)=>{
//     resolve(    {
//     id: 1,
//     name: "Aman",
//     city: "Ludhiana"
// })

// },2000)
//     })
// }

// getUser()
// .then((user)=> {
//     console.log ("user Id :",user.id)
//         console.log ("user name :",user.name)
//                 console.log ("user city :",user.city)


// })
// .catch((error)=> {
//     console.log ("Result :",error)
// })
// .finally(()=> {
//     console.log ("Process Finished the user detail")
// })
// // Exercise 6 — Promise Chaining

// Promise.resolve(10)
// .then((value)=>{
// return value*2
// })
// .then((value)=>{
// return value +5
// })
// .then((value)=>{
// return value*3
// })

// .then((value)=>{
//  console.log (value)
// })

// // Exercise 7 — Convert Promise to async/await

// function getStudent() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 name: "Simran",
//                 marks: 88
//             });
//         }, 1500);
//     });
// }
// async function showStudent() {
//     try{
//             const student = await getStudent()
//             console.log("name :", student.name)
//             console.log("marks :", student.marks)

//             const result =  student.marks>40 ? "pass" : "fail"
//         console.log ("result ", result)
//     }
//   catch{
//     console.log("invalid student")
//   }
// }

// showStudent()

// // Exercise 8 — Sequential Async Operations


// function loginUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Login Successful");
//         }, 2000);
//     });
// }

// function getProfile() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve ("Profile Loaded");
        
//         }, 1000);
//     });
// }

// function getDashboard() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//          resolve("Dashboard Loaded");
//             resolve
//         }, 1000);
//     });
// }

// async function showdata() {
//     try{
//             const login = await loginUser()
//             console.log(login)
// const profile = await getProfile()
//             console.log(profile)
//             const Dashboard = await getDashboard()
//             console.log(Dashboard)
//     }
//   catch{
//     console.log("invalid data")
//   }
// }

// showdata()



// // Exercise 9 — Sequential vs Parallel



// function getUsers() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("welcome user");
//         }, 2000);
//     });
// }

// function getProducts() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve ("get the product");
        
//         }, 1000);
//     });
// }

// function getOrders() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//          resolve("your order");
//             resolve
//         }, 1000);
//     });
// }

// async function showdata() {
//     try{
//             const user = await getUsers()
//             console.log(user)
// const product = await getProducts()
//             console.log(product)
//             const order = await getOrders()
//             console.log(order)
//     }
//   catch{
//     console.log("invalid data")
//   }
// }

// showdata()


// async function showdetail() {
//     try{
//             const showdetail = await Promise.all([
// getUsers(),

// getProducts(),
// getOrders()
// ]);
// console.log (showdetail)
//     }
//   catch{
//     console.log("invalid data")
//   }
// }

// showdetail()

// 1. Which is faster?Parallel
//  execution (showdetail) is faster.

//   2. Why?
// Sequential (showdata) waits for each task to finish completely before starting the next one. It acts like a single queue at a checkout counter (\(2s + 1s + 1s = \mathbf{4\text{ seconds}}\)). 

// 3. When should sequential execution be used?
// Use it when Task B needs data from Task A to run.

// 4. When should parallel execution be used?
// Use it when the tasks are completely independent of each other.






// Exercise 10 — Real API Challenge

async function getUsers() {
try {
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json();
console.log(data);

const total= await data.length
console.log ("total user",total)

const allNames = data.map(user => user.name);

console.log(allNames); 

const email = data.map(user => user.email);

console.log(email); 

const finduser = data.find(user => user.id === 5);

console.log(finduser); 
const username = data.map(user => user.username);

console.log(username); 
} catch (error) {
console.log(error);
}


}
getUsers() 


async function bonus() {
try{
     const [userresponse ,postresponse] = await Promise.all([

 fetch("https://jsonplaceholder.typicode.com/users"),
 fetch("https://jsonplaceholder.typicode.com/posts")
     ])
 const [user,post] = await Promise.all([
    userresponse.json(),
    postresponse.json()
 ]);
 console.log("user",user)
 console.log("post",post)
}
catch(error){
    console.log("error",error)
 
}
    
}
bonus()