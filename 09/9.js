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