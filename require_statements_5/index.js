const cats = require('./cat.js')
const dogs = require('./dog.js')
const randomValue = require('./randomValue')

if (randomValue(0,1) === 1){
    let printOut = cats
    console.log( printOut )
} else {
    let printOut = dogs
    console.log( printOut )
}