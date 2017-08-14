// Exercise 1
var apples = 14;

console.log('I have ' + apples + ' apples');


//Exercise 2
var materials = ['wood', 'metal', 'stone'];

var words = { elephant: "The world's largest land mammal.", school: 'A place of learning.', iceCream: 'A delicious milk-based dessert.'}

console.log(words.elephant);
console.log(words.school);
console.log(words.iceCream);

// Exercise 3
var num = 10;

if (num > 10) {
  console.log(num + ' is greater than 10.');
} else if (num == 10) {
  console.log(num + ' is exactly 10.');
} else {
    console.log(num + ' must be less than ten');
}


// Exercise 4

for (i = 0; i < 10; i++) {
  console.log('Doing the same thing over and over');
}

// Exercise 5
var base = 5
for (i = 0; i < 20; i++) {
  console.log( i + base );
}

// Exercise 6

var total = 0

for (i = 0; i < 100; i++) {
    total += i
    console.log(total);
}

// Exercise 7

for (height = 3; height < 15; height++) {
  if (height < 9) {
    console.log('You can get on the rollercoaster!');
  } else {
    console.log('You are too short to ride this rollercoaster');
  }
}

// Exercise 8

var containers = ['purse', 'wallet', 'backpack']
for (var i = 0; i < containers.length; i++) {
  console.log(containers[i]);
}

// Exercise 9

function helloWorld() {
  console.log('Hello Wolrd!');
}

helloWorld()

// Exercise 10

function add(firstNum, secondNum) {
  console.log(firstNum + secondNum);
}

amount = add(5, 7)
return amount
