"use strict";

console.log([1,2]+[3,4])

var ret = [[10,20], [30,40]].map(function([a, b]) {
    return a + b
})

var arr = [[1,2],[3,4]]
var ret = arr.map(function(v){
    var sum=0;
    for(let i=0; i<v.length; i++) {
        sum += v[i]
    }
    return sum
})
console.log(ret)
// console.log([,,].length);
