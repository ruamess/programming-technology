// Lab 1: Arithmetic expressions and assignment operators
// Basic arithmetic operations and assignment operators

a = 3
b = 4
c = 5

P = a + b + c
console.log(`Perimeter of the triangle is: ${P}`)

P += 1
console.log(`After P += 1: ${P}`)

P /= 2
console.log(`After P /= 2: ${P}`)

P -= 3
console.log(`After P -= 3: ${P}`)

P *= 4
console.log(`After P *= 4: ${P}`)


// Lab 2: Arithmetic operations
// Examples for each arithmetic operation

// -- subtraction
a = 10
b = 3
result = a - b
console.log(`${a} - ${b} = ${result}`)

// + addition
a = 7
b = 5
result = a + b
console.log(`${a} + ${b} = ${result}`)

// * multiplication
a = 6
b = 4
result = a * b
console.log(`${a} * ${b} = ${result}`)

// ** exponentiation
a = 2
b = 3
result = a ** b
console.log(`${a} ** ${b} = ${result}`)

// / division
a = 15
b = 4
result = a / b
console.log(`${a} / ${b} = ${result}`)

// // integer division
a = 15
b = 4
result = Math.floor(a / b)
console.log(`${a} // ${b} = ${result}`)

// % modulus (remainder)
a = 15
b = 4
result = a % b
console.log(`${a} % ${b} = ${result}`)


// Lab 3: Cyclic algorithm structures
// Programming cyclic algorithm structures

// Sum of numbers from 1 to n
n = 10
sumNumbers = 0

for (i = 1; i <= n; i++) {
  sumNumbers += i
}

console.log(`Sum of numbers from 1 to ${n}: ${sumNumbers}`)

// Factorial calculation
number = 5
factorial = 1

for (i = 1; i <= number; i++) {
  factorial *= i
}

console.log(`Factorial of ${number}: ${factorial}`)


// Lab 4: Loop operators
// Examples for each loop type

// 1. while loop - sum of digits of a number
num = 12345
sumDigits = 0
temp = num

while (temp > 0) {
  digit = temp % 10
  sumDigits += digit
  temp = Math.floor(temp / 10)
}

console.log(`Sum of digits of ${num}: ${sumDigits}`)

// 2. for loop - multiplication table
console.log("Multiplication table for 5:")
for (i = 1; i <= 10; i++) {
  console.log(`5 × ${i} = ${5 * i}`)
}


// Lab 5: One-dimensional arrays
// Working with arrays

// 1. Reverse array
lst = [3, -5, 1, -8, 2, 4]
reversedLst = [...lst].reverse()
console.log(`Original: [${lst}]`)
console.log(`Reversed: [${reversedLst}]`)

// 2. Sort by absolute value descending
function list_sort(lst) {
  return [...lst].sort((a, b) => Math.abs(b) - Math.abs(a))
}

sortedLst = list_sort(lst)
console.log(`Sorted by abs desc: [${sortedLst}]`)

// 3. Swap first and last elements
function change(lst) {
  if (lst.length >= 2) {
    [lst[0], lst[lst.length - 1]] = [lst[lst.length - 1], lst[0]]
  }
  return lst
}

changedLst = change([...lst])
console.log(`First and last swapped: [${changedLst}]`)


// Lab 6: Two-dimensional arrays
// Matrix diagonal sum calculation

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log("Matrix:")
for (i = 0; i < matrix.length; i++) {
  console.log(matrix[i])
}

diagonalSum = 0
for (i = 0; i < matrix.length; i++) {
  diagonalSum += matrix[i][i]
}

console.log(`Sum of main diagonal: ${diagonalSum}`)


// Lab 7: Tuples and loop operators
// Working with arrays as tuples (immutable concept)

// Create array (simulating tuple)
fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']

// For loop with array
console.log("Fruits in the array:")
for (i = 0; i < fruits.length; i++) {
  console.log(`- ${fruits[i]}`)
}

// While loop with array
console.log("Fruits with index:")
index = 0
while (index < fruits.length) {
  console.log(`${index}: ${fruits[index]}`)
  index++
}

// Demonstrate immutability concept
console.log("Original fruits array remains unchanged:")
console.log(fruits)


// Lab 8: String variables
// Working with string operations

text = "Hello, World! Programming is fun!"

// String length
console.log(`String length: ${text.length}`)

// Case conversion
console.log(`Uppercase: ${text.toUpperCase()}`)
console.log(`Lowercase: ${text.toLowerCase()}`)

// String replacement
newText = text.replace("World", "Python")
console.log(`After replacement: ${newText}`)

// String splitting
words = text.split(" ")
console.log(`Split into words: [${words}]`)

// Substring search
index = text.indexOf("Programming")
console.log(`'Programming' found at index: ${index}`)

// Start/end checks
console.log(`Starts with 'Hello': ${text.startsWith('Hello')}`)
console.log(`Ends with 'fun!': ${text.endsWith('fun!')}`)
