const myObject ={
    js: 'Javascript',
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(myObject[key])
    console.log(`The fullform of ${key} is ${myObject[key]} `)

    
}