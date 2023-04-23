// браузерное событие, read about webSocket, что такое патерны програмимирования
// function =>
// handler(обработчик), listener(слушатель), subscriber()
// при наступлении события
// const event = new Event() = объект, который содержит сведения о событии
// function(event) => вызов функции
// event, ev, e === new Event()


// [] === new Array()
// {} === new Object()
// const map = new Map()
// const set = new Set()


// const sm = document.getElementById('small')
// const md = document.getElementById('medium')
// const bg = document.getElementById('big')
//
//
// function handler_1(text) {
//     console.log(text)
// }
//
// function handler_2(text) {
//     console.log(text)
// }
//
// function handler_3(e) {
//     e.stopPropagation()
//     console.log(e.currentTarget.id)
// }


// function handler_3(e) {
//     if(e.target.tagName === 'BUTTON'){
//         console.log(e.target.id)
//     }
// }

// const anonymous = () => handler_1('handler_1')
// const anonymousNext = () => handler_1('handler_1')
//
// sm.onclick = anonymous
// sm.onclick = anonymousNext

// sm.onclick = () => {
//     handler_1()
//     handler_2()
// }

// sm.onclick = () => handler_1()  --> deleting

// sm.addEventListener('click', handler_1)
// sm.addEventListener('click', handler_2, {once: true})
// sm.removeEventListener('click', handler_1)


sm.addEventListener('click', handler_3, {capture: true})
md.addEventListener('click', handler_3, {capture: false})
bg.addEventListener('click', handler_3, {capture: true})


const a = document.getElementById('a')
a.addEventListener('click', )











