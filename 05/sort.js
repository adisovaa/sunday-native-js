const name1 = ['Siri', 'Alexa', 'Alisa']
console.log(name1.sort())
// 1. сортировка строки из коробки, т.е без параментров

const name2 = ['Siri', 'alexa', 'ALisa', 'CHYNARA', 'aDIS', 'AlmiRA']
console.log(name2.sort())
// 2. сортировка по алфавиту unicode


console.log(name1.sort() === name1)
// 3. sort() - работает мутабельно
// 4. метод sort() - возвращает ссылку на исходный массив

const numbers = [19, 433, 5445, 457, 8, -34, 45, 5645, 4325]
console.log(numbers.sort())
// 5. Для остальных случаях будем передавать callback

// const compareFunc = (a, b) => {
//     // > 0 - надо переставить
//     // < 0 - порядок не меняем
//     if (a > b) {
//         return 999
//     } else {
//         return -1
//     }
// }

const compareFunc = (a, b) => a - b
console.log(numbers.sort(compareFunc))
// 6. функция сравнения должна возвращать число большее или меньшее 0


console.log(numbers.reverse())
// 7. вместе с sort часто используется reverse


const students = [
    {name: 'AleXa', age: 22, isMarried: true, scores: 95},
    {name: 'john', age: 42, isMarried: false, scores: 65},
    {name: 'SIRI', age: 81, isMarried: false, scores: 23},
    {name: 'AlIsA', age: 34, isMarried: true, scores: 37}
]

const sortByName = (a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1
    } else {
        return -1
    }
}
console.log(students.sort(sortByName))
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))
// 8. сортировка массива объектов по строковым значениям


console.log(students.sort((a, b) => a.age - b.name))
// 9. сортировка массива объектов по числовым значениям


// 10. сортировка пузырьком - bubble sort()
// const nums = [23, 45, 21, 578, 2398, 22]

const nums = [23, 45, 21, 578, 2398, 22]

for (let j = 0; j < nums.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1 - j; i++) {
        if (nums[i] > nums[i + 1]) {
            isSorted = false;
            // let temp = nums[i]
            // nums[i] = nums[i + 1]
            // nums[i + 1] = temp
            [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]
        }
    }
    if (isSorted) break
}
console.log(nums)