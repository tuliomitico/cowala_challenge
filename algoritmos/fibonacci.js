const fibo = (n) => {
    const array = [0,1]
    for (let index = 2; index < n; index++) {
        array.push(array[index-1] + array[index-2])   
    }
    return array
}

console.log(fibo(6))