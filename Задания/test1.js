let a = 1, b = 11, c = 1;

let d = (Math.pow(b, 2) - 4 * a * c);
console.log('дискриминант = ', d);

let x1, x2;

x1 = ((-b + Math.sqrt(d)) / 2 * a);
x2 = ((-b - Math.sqrt(d)) / 2 * a);

console.log(x1, ' ', x2)

