<<<<<<< HEAD
let numbers = [7, 30, 24, 12, 55, 9, 47, 45, 4, 84];
let min = numbers[0];
let max = numbers[0];

// Finding min and max
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
// Finding summation
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; 
}

console.log("Numbers: " + numbers.join(" "));
console.log("Min: " + min);
console.log("Max: " + max);
console.log("Sum: " + sum);
=======
let numbers = [7, 30, 24, 12, 55, 9, 47, 45, 4, 84];
let min = numbers[0];
let max = numbers[0];

// Finding min and max
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
// Finding summation
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; 
}

console.log("Numbers: " + numbers.join(" "));
console.log("Min: " + min);
console.log("Max: " + max);
console.log("Sum: " + sum);
>>>>>>> 3173358fffa684a82b537d39c77bd77a62acff46
console.log("Average: " + (sum / numbers.length));