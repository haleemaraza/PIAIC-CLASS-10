// //  function 


// // 1
// function hello(){
//     console.log ("hello aydin")
// }
// hello()


// // 2
// function world(){
//     hello()
// }
// world()


// // 3
// function earth(callback:any){
//     callback()
// }
// earth(hello)


// // 4
// function func (name:string){
//     console.log(name)
// }
// let a = "hello world"

// function work(text :string,callback:any){
//     callback(a)
// }
// func(a)

// // 5 
// function funct(nam:string){
//     console.log(nam)
// }

// funct("hello arfa")

// // 6
// function functi(nam:string){
//     console.log(nam)
// }

// function hard(text:string ,callback:any){
//     callback(text)
// }
// hard("hello haya",functi)



// // async function 


// // 1
// function printSecond(){
// console.log("first")
// }
// setTimeout(printSecond,2000)
// console.log("third")


// // 2
// console.log("first")
// setTimeout(()=>console.log("second"),2000)
// setTimeout(()=>{
//     console.log("third")
// })


// // 3
// console.log("first")
// setTimeout(()=>console.log("second"),0)
// for(let i =0 ; i<5;i++){
//     console.log("j")
// } 
// console.log("third")


// 4(callback hell)
setTimeout(()=>{
    console.log("user profile")
    setTimeout(()=>{
        console.log("user post")
        setTimeout(()=>{
            console.log("user comment")
        },1000)
    },2000)
},3000)




// promise 
// 1  (resolve)
let myPromise = new Promise((resolve,reject)=>{
    console.log("promise pending....")
    setTimeout(()=>{
        console.log("status resolved....")
        resolve(["aydin" ,"arfa"])  ; 
    },2000)
})

myPromise
.then((res)=>(console.log(res)))
.catch((error)=>(console.log(error)))


// 2 (rejected)
let myPromises = new Promise((resolve,reject)=>{
    console.log("promise pending....")
    setTimeout(()=>{
        console.log("promise rejected....")
        reject("data fetch error")
    },2000)
})

myPromise
.then((res)=>(console.log(res)))
.catch((error)=>(console.log(error)))



// 3  (condition)

let myPromise_ = new Promise((resolve,reject)=>{
    console.log("promise pending....")

    setTimeout(()=>{
        let data =["aydin" ,"arfa"]

        if(data){
            console.log("promise resolve")
            resolve(data)
        }else{
            console.log("promise rejected....")
            reject("data fetch error")
        }
    },2000)
})

myPromise
.then((res)=>(console.log(res)))
.catch((error)=>(console.log(error)))



// fetch
// its a perdefined function 
// jasonoplaceholder(its a link )+ user + get a link +past it in fetch 
let data = fetch("")

.then((res)=>res.json())
.then((res)=>(console.log(res)))
.catch((err)=>(console.log(err)))

console.log("data",data)



// ascyn await using with promise
async function datafunc(){
    let fetchdata = await fetch(" ")
    let data =  await fetchdata.json()
    console.log(data)
}
datafunc()