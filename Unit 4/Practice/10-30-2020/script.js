// if(name = "Pam") {
//     console.log(`cool`);
// }else {
//     console.log(`not so cool`);
// }

// let coolness = (name = "Pam") ? "cool" : "not so cool";
// console.log(`${coolness}`);

// let result = (a + b < 4)  ? "Below" : "Over"; 

// switch (param) {
//     case "walk":
//         break;
//     case "sleep":
        
//     case "dream":
//         break;
//     default:
// }

// switch (true) {
//     case (myVal >= 10):
//         multipler = 2;
//         break;
//     case (myVal >= 0):
//         multipler = 1;
//         break;
//     default:
//         multipler = -1;
// }

// switch (login) {
//     case "Employee":
//         message = "Hello";
//         break;
//     case "Director":
//         message == "Greeting"
//         break;
//     case "":
//         message == "No Login";
//         break;
//     default:
//         "";
// }

// if(employee == true) {
//     if(name == "Karry"){
//         if(computer == "personal") {

//         }else if (computer == "work"){

//         }
//     }
// }

// || not II or LL or ll or ii 

// if (shirt == "blue" || shirt == "red" || shirt == "green" || shirt == "pink"){

// }

// weekdays == true / false;
// time = 14;

// if (time < 9 || time > 17 || weekdays == false) {
//     console.log(`The Store is closed`);
// }else {
//     console.log(`The store is open`)
// }


// tells you if you need to fix your car
// if you have a flat tire
// if you check engine light is on
// if you have driven 30,000+ plus miles

// let flatTire = false;
// let checkEngineLight = true;
// let miles = 30000;

// if (flatTire || checkEngineLight || miles > 30000) {
//     console.log(`Fix you car`);
// }else {
//     console.log(`You're good`)
// }

// let pen = true;
// let paper = false;
// let mouse = false;
// let keyboard = true;

// if (pen && paper || mouse && keyboard) {
//     console.log(`You can take notes`)
// }

// let upLate = true;
// let gameTooMuch = true;
// let breakfast = false;

// if (!upLate && !gameTooMuch && !breakfast){
//     console.log(`pass`)
// }

// console.log(null || 2 && 3 || 4);

// for(let i = 0; i < 10; i++) {
// 	console.log(`this has happened ${i +1} times`);
// }

// for(let i = 5; i < 14; i+= 2 ){
//     console.log(`The number prints ${i}`);
// }


// for(let i = 5; i < 12; i++) {
//     console.log(i);
// }

// for(let i = 0; i < 9; i++) {
//     console.log(`This is nice`);
// }

// for(let i = 11; i >= 1; i-= 2) {
//     console.log(i)
// }

// output = ''
// for(let i = 0; i < 5; i++ ) {
//     let x = Math.floor(Math.random() * 100);
//     output = output + ', ' + x;
// }
// console.log(output);


// for(let i = 0; i < 5; i++ ) {
//     let x = Math.floor(Math.random() * 10);
//     console.log(x);
//     const count = x.push(' ,');
//     console.log(count);
// }

// let sum = 0;
// let amount = 0;

// while(true) {
//     let value = +prompt(`Enter a test score:`, `leave black if done`);
//     if (!value) break;
//     sum += Number(value);
//     amount++;
// }

// let average = sum / amount;
// let grade = '';

// if(average >= 90){
//     Grade = 'A';
// }else if(average >= 80){
//     Grade = 'B';
// }else if(average >= 70){
//     Grade = 'C';
// }else if(average >= 60){
//     Grade = 'D';
// }else{
//     Grade = 'F';
// }

// console.log(`Sum: ${sum}`);
// console.log(`Amount: ${amount}`);
// console.log(`Average: ${average}`);
// console.log(`Grade: ${grade}`);

// main: for (let i = 0; i < 100; i++) {
//     if(i % 2 == 1) continue main;
//     console.log(i); 
// }

// let i, j;

// loopOuter:
// for(i = 0; i < 3; i ++) {
//     loopInner:
//     for(j = 0; j < 3; j++) {
//         if(i == j) {
//             continue loopOuter;
//         }else {
//             console.log(`i = ${i}, j = ${j}, so they are not equal.`);
//         }
//     }
// }


let num1 = 0,
    num2 = 0,
    num3 = 0,
    num4 = 0,
    num5 = 0,
    num6 = 0;

num1 = Math.ceil(Math.random() * 10);
num2 = Math.ceil(Math.random() * 10);

while(true) {
    if(num1 == num2) {
        num2 = Math.ceil(Math.random() * 10);
    }else {
        break;
    }
}

num3 = Math.ceil(Math.random() * 10);

while(true) {
    if(num1 == num3 || num2 == num3) {
        num3 = Math.ceil(Math.random() * 10);
    }else {
        break;
    }
}

num4 = Math.ceil(Math.random() * 10);

while(true) {
    if(num1 == num4 || num2 == num4 || num3 == num4) {
        num4 = Math.ceil(Math.random() * 10);
    }else {
        break;
    }
}

num5 = Math.ceil(Math.random() * 10);

while(true) {
    if(num1 == num5 || num2 == num5 || num3 == num5 || num4 == num5) {
        num5 = Math.ceil(Math.random() * 10);
    }else {
        break;
    }
}

num6 = Math.ceil(Math.random() * 10);

while(true) {
    if(num1 == num6 || num2 == num6 || num3 == num6 || num4 == num6 || num5 == num6) {
        num6 = Math.ceil(Math.random() * 10);
    }else {
        break;
    }
}

console.log(`${num1}, ${num2}, ${num3}, ${num4}, ${num5}, ${num6}.`);