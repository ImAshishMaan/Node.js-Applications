const fs = require('fs')

// const book = {
//     title: 'Efo is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const user = JSON.parse(dataBuffer.toString())
user.name = 'Ashish'
user.age = 22

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)
console.log(userJSON)


