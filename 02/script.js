// first lesson

// // примитивы: number, string, boolean, null, undefined, NaN, Infinity, Symbol
// // Объекты: array, function, object
//
// // differences
// // 1. сложная структура
// // 2. имеют свойства и методы
// // 3. ссылочный тип данных
//
//
// const num = 5
//
// const obj = {}  // new Object ()
// const num_2 = num
// const obj_2 = obj
//
// obj_2.name = 'Alex'
// console.log(obj)
//
// const arr = []  // new Array ()
//
// class Student {
//
// }
//
// const st = new Student()
//
// const user = {
//     name: 'Alexa',
//     age: 23,
//     isStudent: false
// }
//
// const copyUser = {
//     ...user,
//     // name: 'Alexa',
//     // age: 23
//     // isStudent: false
//     isStudent: true
// }
//
// const arr1 = [1, 2, 3, 4, 5]
// const arrCopy = [...arr1]
//
// console.log(user === copyUser)  // false
//
// function stateChecker(current, next) {
//     if (current === next) {
//         console.log('no changes')
//     } else {
//         console.log('the app has new updates')
//     }
// }
//
// stateChecker(user, copyUser)
//
//
// const studentLow = [
//     {
//         name: 'John',
//         age: 34,
//         address: {
//             city: 'New York',
//             country: 'US'
//         }
//     },
//     {
//         name: 'Leon',
//         age: 56,
//         address: {
//             city: 'Kyrgyzstan',
//             country: 'Osh'
//         }
//     }
// ]
//
// //CRUD
// // Create
// // Read  ---> (filter, sort, search)
// // Update
// // Delete
//
//
// // create
// const newStudentLow = {
//     name: 'Karen',
//     age: 19
// }
//
// const student_1 = [...studentLow, newStudentLow]
// console.log(student_1)
//
//
// // change
// const student_2 = student_1.map(el => el.name === 'john' ? {...el, age: 45} : el)
//
// stateChecker(student_1, student_2)
//
//
// // delete
// const student_3 = student_2.filter(el => el.name !== 'Bob')



// second lesson
let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const getNames = (array) => {
    const result = []
    const elMapFn = (st) => st.name
    for (let i = 0; i < array.length; i++) {
        const newValue = elMapFn(array[i])
        result[i] = newValue
    }
    return result
}

console.log(students.map())


const getSimpleStudent = (array) => {
    const result = []

}