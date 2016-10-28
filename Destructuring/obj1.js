// console.log(foo, bar);

let obj = {
    first: "hello",
    last: "world"
};
let {
    first: f,
    last: l
} = obj
console.log(f, l)
    //对象的解构赋值的内部机制，是先找到同名的属性，然后再赋给对应的变量。
    //真正被赋值的是后者。



let {
    foo: baz
} = {
    foo: "aaa",
    bar: "bbb"
}
console.log(baz);
// console.log(foo);

//上面代码中，被赋值的是变量baz，而不是模式foo
//注意，采用这种写法时，变量的声明和赋值是一体的。对let 和 const 来说，变量不能重新声明，所以一旦赋值的变量之前声明过，就会报错。
let {
    foo1
} = {
    foo1: "aaaa"
};
// let{baz:foo1} = {baz:"ccc"};
