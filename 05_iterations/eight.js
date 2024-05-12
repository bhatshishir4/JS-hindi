//reduce


// const mynums = [1,2,3]

// const total = mynums.reduce( (acc, curr) => (acc + curr),0 )
// console.log(total)

const shoppingCart = [
    {
        name:"JS course",
        price: 2999
        
    },
    {
        name:"python",
        price: 999

    },
    {
        name:" mobile dev",
        price: 5999

    },
    {
        name:"Data Science",
        price: 12999

    }

]

const totalprice = shoppingCart.reduce( (acc, item) => (acc + item.price),0 )
console.log(totalprice)