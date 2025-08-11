function whatsMyType<T> (argument:T){
    return argument;
}

let amIString = whatsMyType('Holaaaa');
let amINumber = whatsMyType(56);
let amIArray = whatsMyType([3,4,6,8,12]);

console.log(amIString.split(''));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));