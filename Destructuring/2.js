"use strict";

let [ , , third] = ["foo", "bar", "baz"];
console.log("third="+third);

// let [x, , y] = [1,2,3]
// console.log("x="+x,"y="+y)

let [head, ...tail] = [1, 2, 3, 4, 5]
console.log("head="+head, "tail="+tail);
console.log(tail instanceof Array);


let [x, y, ...z] = ["a"]
console.log("x="+x, "y="+y, "z="+z);
