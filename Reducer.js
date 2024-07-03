function Reducer(arr, func) {
   
    let result = arr[0];
    for (let nextEl of arr.slice(1)) {
        result = func(result, nextEl)
    }
    return <li>{result}</li>;
}
Reducer([1,2,3], (a,b)=>a+b);

export default Reducer;