'use strict'

// 1. Read the JSON file into a variable called students
const students = require('./students.json')

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker
// const students = require('./students.json')
function say(message) {
    console.log(message)
}
students.forEach((student) => {
    const {
        firstName,
        lastName
    } = student

    say(`Hello ${firstName} ${lastName}`)
})

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1
let lastName = students.filter((student) => student.lastName.startsWith('D'))
say(`Count of last names starting with D is ${lastName.length}`)