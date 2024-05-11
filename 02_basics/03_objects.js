//singleton
//Object.create  can also be used to create objects

//object literals

const mysym1 = Symbol("key1")

const JsUser = { 
    name: "Shishir",
    [mysym1]: "Mykey",
    age: 23,
    location: "Bhaktapur",
    email: "bhatshishir4@gmail.com",
    isLoggedin: true,
    LastLoginDays: ["Sunday", "Monday"]

}



// to overwrite just use this  JsUser.email = "bhatasdfadsg@gmail.com"
//Object.freeze(JsUser)   This is will lock the object

//JsUser.email = "hotpot.com"

//console.log(JsUser)

//console.log(JsUser[mysym1])
//console.log(typeof JsUser[mysym1])


JsUser.greeting = function(){

console.log("Hello World")
}

JsUser.greetingtwo = function(){

    console.log(`Hello World, My name is ${this.name}`)
    }

console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())

