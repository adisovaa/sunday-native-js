// // 10. Promis
//
// fetch('http://library/autors/5', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         fetch('http://library/autors/5/books', (err, data) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 fetch('http://library/autors/5/books/6', (err, data) => {
//                         if (err) {
//                             console.log(err)
//                         }
//                     }
//                 )
//             }
//         }
//


// const server = {
//     getData() {
//         const promise1 = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 // resolve(console.log('resolved'))
//                 reject(console.log('some error'))
//             }, 2000)
//         })
//         return promise1
//     }
// }
//
//
// const promise2 = server.getData()
//
// // then
// // catch
// // finally


// const server = {
//     getData() {
//         const promise1 = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve('data')
//                 //reject('smth went wrong')
//             }, 2000)
//         })
//         return promise1
//     }
// }
//
// const promise1 = server.getData()
// const promise2 = server.getData()
// then
// catch
// finally

// promise1.then(
//     (res) => {
//         console.log('then', res)
//     },
//     (err) => {
//         console.error(err)
//     }
// )


// promise1.then(
//     (res) => {
//         console.log('then', res)
//     },
// )
//
// promise1.catch((err) => {
//     console.error(err)
// })
//
// promise1.finally(() => {
//     console.log('finally')
// })


// const promise3 = promise2.then((data) => {
//     console.log('then', data)
// })
//
// promise3.then((res2) => {
//     console.log('then2', res2)
// })


// server.getData().then((data) => {
//     console.log('then', data)
//     return data
// }).then((res2) => {
//     fetch()
//     console.log('then2', res2)
// }).catch((err) => {
//     console.log('catch', err)
//     console.log(a)
// }).then(() => {
//     console.log('then3')
// }).catch((err) => {
//     console.log('catch2', err)
// })


// эта не цепочка, параллельное выполнение запроса
// const promise4 = server.getData()
// promise4.then(() => {})
// promise4.then(() => {})


// цепочка промисов
//promise4.then(() => {}).then(() => {})


// fetch('http://library/autors')
//     .then((data) => {
//         fetch('http://library/autors/5')
//     })
//     .then((data) => {
//         fetch('http://library/autors/5/books')
//     })
//     .then((data) => {
//         fetch('http://library/autors/5/books/6')
//     })
//     .catch((err) => {
//         console.log('catch error', err)
//     })


// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен»
// через ms миллисекунд, так чтобы мы могли добавить к нему .then:


// const delay = (ms) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, ms)
//     })
// }
// delay(2000).then(() => console.log('Hello!'))




















