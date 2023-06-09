// let a = 0
// const createCounter = () => {
//
//     const counter = {
//         increment() {
//             a++
//         },
//         getCounter() {
//             return a
//         }
//     }
//     return counter
// }
//
// const counter1 = createCounter()
// const counter2 = createCounter()
//
// counter1.increment()
// counter1.increment()
// console.log(counter2.getCounter())
//
//
// const print = (name) => {
//     console.log(`hello, ${name}`)
// }
//
// const createPrint = (name) => {
//     return () => print(name)
// }
//
// setTimeout(createPrint('Siri'), 100)
// setTimeout(createPrint('Alexa'), 100)
//
//
// const thunkMiddleware = (thunk) => {
//     thunk({title: superObject}, () => {
//     })
// }
//
// const getUserCreator = () => {
//     const thunk1 = (superObject, superFunction) => {
//         fetch('https://react.dev/')
//     }
//     return thunk1
// }
// thunkMiddleware(getUserCreator(10))
//
//
// const func1 = () => {
//     return () => {
//         console.log(10)
//     }
// }
//
// func1()
//
//
// const sum = (a, b) => {
//     return a + b
// }
// console.log(sum(1, 20)())
//
//
// const func2 = (a) => (b) => (c) => (d) => console.log(a + b + c + d)
// func2(1)(2)(3)(4)


// let arr = [1, 2, 3, 4, 5, 6, 7]
//
// const inBetween = (start, end) => {
//     return (el) => {
//         return el >= start && el <= end
//     }
// }
//
// console.log(arr.filter(inBetween(3, 6)))


// лексическое окружение, замыкание, рекурсия
// const a = 5  globalLE == null --> конечная точка

// const car = 'bmw'
// const startEngine = () => {
//     console.log(`Start ${car}`)
// }
// startEngine()

// console.log(a)
// console.log(b)
// console.log(c)
//
// var a = '1'
// const b = '2'
// let c = '3'
//
// function foo() {
//     console.log('foo')
// }
//
// const foo2 = function () {
//     console.log('foo2')
// }
//
// const foo3 = () => {
//     console.log('foo3')
// }


// let car = 'bmw'
// const startEngine = () => {
//     console.log(`Start ${car}`)
// }
// car = 'tesla'
//
// startEngine()

//
// let car = 'bmw'
// const startEngine = () => {
//     const car = 'lexus'
//     const foo = () => {
//         console.log(`Start ${car}`)
//     }
//     foo()
// }
// car = 'tesla'
//
// startEngine()


const counter = () => {
    let count = 0
    return () => {
        console.log(count++)
    }
}

const count1 = counter()
count1()
count1()
count1()