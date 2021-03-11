//task 2
let getMin = (arr) => {
    return Math.min.apply(null, arr);
}
console.log(getMin([2, 4, 5, 7, 9, 4, 1, 16]))

//task 3
let getEven = (arr) => {
    return arr.filter(num => num % 2 === 0);
}
console.log(getEven([2, 4, 5, 7, 9, 4, 1, 16]))

//task 4
let arr = [
    {name: 'Junny Walker', birthDate: '1995-12-17'},
    {name: 'Andrew', birthDate: '2001-10-29'},
    {name: 'Viktor', birthDate: '1998-11-09'},
    {name: 'Andrew', birthDate: '2011-05-09'},
]
let searchByName = (str) => {
    return arr.filter(arr =>  arr.name === str)
}
console.log(searchByName('Andrew'));