/*
Date: 21.01.0224
Name: Keti
*/

// This is a comment

// console.log('Keti') // string
// console.log("Keti") // string
// console.log(26) // numbers
// console.log(25.1) // numbers
// console.log(true) // boolean
// console.log(false) // boolean

// console.log(14 + 8) // +, -, *, /
// console.log(25 % 7)

// comment - ctrl + K + C

// console.log('14' + '8')
// console.log('Hello' + ' ' + 'World!')

// console.log('Hello World!'.length) // .length

// console.log('Hello World!'.toLowerCase())
// console.log('     Hello World!    '.trim()) // მოაშორებს სფეისებს

// console.log(Math.PI) // pi რიცხვი
// console.log(Math.pow(3, 2)) // ახარისხება
// console.log(Math.max(4, 2, 6, 8, 14, 3))

// // იპოვეთ 4, 2, 6, 8, 14, 3 მინიმალური და დაბეჭდეთ
// console.log(Math.min(4, 2, 6, 8, 14, 3))
// // აიყვანეთ 2 5 ხარისხში და დაბეჭდეთ
// console.log(Math.pow(2, 5))
// // დაწერეთ ფესვი 15-დან
// console.log(Math.sqrt(15))
// // დაწერეთ კოდი, რომელიც დაწერს შემთხვევით რიცხვს 0-დან 15-ის ჩათვლით
// console.log(Math.random() * 15)
// // დაამრგვალეთ რიცხვი 13.6
// console.log(Math.round(13.6))
// console.log(Math.ceil(13.1))
// console.log(Math.floor(13.6))

// 1. console.log()-ის შიგნით შექმენით შემთხვევითი რიცხვი Math.random()-ით,
// შემდეგ გაამრავლეთ იგი 100 - ზე.
// console.log(Math.random())
// console.log(Math.random() * 100)

// დაწერეთ კოდი, რომელიც დაწერს შემთხვევით რიცხვს 13-დან 15-ის ჩათვლით

// 2. Math.floor() რათა გამომავალი იყოს მთელი რიცხვი. 13.6
// Math.round() // დამრგვალება
// Math.floor() // ქვევით ამრგვალებს
// Math.ceil() // ზევით ამრგვალებს
// console.log(Math.floor(13.6))

// 3. იპოვეთ მეთოდი JavaScript Math ობიექტზე, რომელიც აბრუნებს უმცირეს რიცხვს,
// რომელიც აღემატება ან ტოლია მოცემულ ათწილადზე.
// გამოიყენეთ ეს მეთოდი 43.3 რიცხვისთვის.
// console.log(Math.ceil(43.3))

// 4. გამოიყენეთ JavaScript დოკუმენტაცია ჩაშენებულ Number ობიექტზე მეთოდის მოსაძებნად,
// რომელიც ამოწმებს არის თუ არა რიცხვი მთელი რიცხვი.
//მეთოდის ფრჩხილებში ჩასვით რიცხვი 2017 და შედეგის დასაბეჭდად გამოიყენეთ console.log().




// 1. შექმენით მასივი, სადაც ჩაწერეთ
//      შემთხვევით მთელ რიცხვებს 1 - 20-ის ჩათვლით (15 ელემენტი)
// 2. დაბეჭდეთ
// 3. ჩაწერილი რიცხვები გააორმაგეთ: მაგ: თუ წერია 14, შედეგი იყოს 14*2=28
// 4. შედეგი დაბეჭდეთ
// let randomNumbers = []

// for (let index = 0; index < 15; index++) {
//     randomNumbers[index] = Math.ceil(Math.random() * 20);
// }

// console.log(randomNumbers)

// for (let index = 0; index < randomNumbers.length; index++) {
//     randomNumbers[index] *= 2;
// }

// console.log(randomNumbers)

// "racecar"
// "Hello"
let str = "racecar";
let isPalindrome = true;
// 0 1 2 3 4 5 6 7 8 9

for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i])
    {
        isPalindrome = false;
    }
}


// დაწერეთ პროგრამა, რომელიც ითვლის ბილეთის ფასს ასაკის მიხედვით შემდეგი პირობებით:
// 12 წლამდე ბილეთის ფასი 5,
// 18 წლამდე ბილეთის ფასი 10,
// 60 წლამდე ასაკი - ბილეთის ფასი 20,
// 60 წელზე მეტი - ბილეთის ფასი 15 ლარი.
// ასაკი შემოიყვანოს მომხმარებელმა
// ასაკის input და "Calculate Price" ღილაკი
function CalculatePrice() {
    let age = document.getElementById("age").value;

    if (age < 0 && age > 150) {
        document.getElementById("PriceResult").value =
            "Age not valid";
    }
    else if (age < 12) {
        document.getElementById("PriceResult").value = 5;
    } else if(age < 18){
        document.getElementById("PriceResult").value = 10;
    }
    else if(age < 60){
        document.getElementById("PriceResult").value = 20;
    } else {
        document.getElementById("PriceResult").value = 15;
    }
}

// დაწერეთ პროგრამა, რომელიც ითვლის
// ფასდაკლებას შესყიდვის ოდენობის მიხედვით.
// >= 100, ფასდაკლება არის 20%.
// >= 50, ფასდაკლება 10%.
// წინააღმდეგ შემთხვევაში ფასდაკლება არის 0.
function CalculateDiscount() {
    let price = document.getElementById("price").value;
    let message = "";
    let discount = 0;

    if (price >= 100) {
        discount = price * 0.2;
        price -= discount;
        message = "The discount is 20%. You have to pay" + price;
    }
    else if (price >= 50) {
        discount = price * 0.1;
        price -= discount;
        message = "The discount is 10%. You have to pay" + price;
    } else {
        message = "The discount is 0%. You have to pay" + price;
    }

    document.getElementById("discountResult").value = message;
}

// დაწერეთ პროგრამა, რომელიც მიესალმება მომხმარებელს
// დღის მონაკვეთის მიხედვით.
// აჩვენეთ დილა მშვიდობისა, შუადღე მშვიდობისა ან
// საღამო მშვიდობისა, დღის იმ დროის მიხედვით,
// როდესაც თქვენ აწარმოებთ კოდს.
function CheckTime() {
    // current time in js
}

// დაწერეთ რიცხვების გამოცნობის მარტივი თამაში.
// მიუთითეთ საიდუმლო რენდომული რიცხვი 1 - 20 შუალედში.
// მოთამაშეს დაუწერეთ მათი გამოცნობილი რიცხვი
// უფრო მაღალია თუ უფრო  დაბალი თუ სწორი.