const newnumbers = [1,2,3,4,5,6,7,8,9,10]

const num1 = newnumbers
            .map( (mul) => (mul * 10) )
            .map( (mul) => (mul + 1) )
            .filter( (mul) => (mul >= 40) )

 console.log(num1)