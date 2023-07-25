
// 거듭제곱 연산
let num = 3;
console.log(num ** 4);

// 증감 연산자
let x = 5;

x--;
console.log(`x: ${x}`);

let y = 33;
console.log(`y: ${y--}`);
console.log(`y: ${y}`);


let a = 7;
let b = a++;

console.log(`a: ${a}, b: ${b}`);

let c = 7;
let d = ++c;
console.log(`c: ${c}, d: ${d}`);


// 대입 연산자
let z = 9;
z += 3; // z = z + 3;
z -= 8; // 4
z *= 10; // 40
z /= 8;  // 5
z **= 2; // 25
console.log(`z: ${z}`);

let m = 8;
m++; // 1증가 1감소할 때는 ++, --가 빠름
// m += 1; // m = m + 1;
console.log(`m: ${m}`);

const str = 'hello' * 5.5;
console.log(`str: ${str}`);
