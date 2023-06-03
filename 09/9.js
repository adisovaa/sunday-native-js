let a = 0
const createCounter = () => {

    const counter = {
        increment() {
            a++
        },
        getCounter() {
            return a
        }
    }
    return counter
}

const counter1 = createCounter()
const counter2 = createCounter()

counter1.increment()
counter1.increment()
console.log(counter2.getCounter())


const print = (name) => {
    console.log(`hello, ${name}`)
}

const createPrint = (name) => {
    return () => print(name)
}

setTimeout(createPrint('Siri'), 100)
setTimeout(createPrint('Alexa'), 100)


const thunkMiddleware = (thunk) => {
    thunk({title: superObject}, () => {
    })
}

const getUserCreator = () => {
    const thunk1 = (superObject, superFunction) => {
        fetch('https://react.dev/')
    }
    return thunk1
}
thunkMiddleware(getUserCreator(10))


const func1 = () => {
    return () => {
        console.log(10)
    }
}

func1()


const sum = (a, b) => {
    return a + b
}
console.log(sum(1, 20)())


const func2 = (a) => (b) => (c) => (d) => console.log(a + b + c + d)
func2(1)(2)(3)(4)