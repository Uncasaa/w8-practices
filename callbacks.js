function displayer(something) {
    return something
}

function calculator (number1, number2, myCallBack) {
    let result = number1 + number2;
    console.log(myCallBack(result));
}

calculator (5,5, displayer);

function greet () {
    console.log("Hello World");
}

function sayName(name) {
    console.log("Hello" + " " + name);
}

function callSayName(callback, name="") {
    callback(name)
}
callSayName(sayName, "John");
callSayName(greet);

//setTimeout(greet, 2000);
//sayName("David");

