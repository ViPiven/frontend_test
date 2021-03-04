//task 2
let getMin = (arr) => {
    let num = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (num > arr[i]) {
            num = arr[i];
        }
    }
    return num;
}
console.log(getMin([2, 4, 5, 7, 9, 4, 1, 16]))

//task 3
let getEven = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let result = arr[i];
        if(result % 2 === 0) {
            newArr.push(result);
        }
    }
    return newArr;
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
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].name === str) {
            result.push(arr[i])
        }
    }
    return result;
}
console.log(searchByName('Andrew'));