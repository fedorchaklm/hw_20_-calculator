// Створити скрипт який повинен виконувати наступне:

// питаємо у користувача, що він хоче зробити (add, sub, mult, div);
// питаємо у користувача перше число;
// запитуємо у користувача друге число;
// виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").

function getOption() {
  let getOption = prompt("Choose action: add, sub, mult, div");
  while (getOption === null || getOption === "") {
    getOption = prompt("Choose action: add, sub, mult, div");
  }
  return getOption.trim().toLocaleLowerCase();
}

function getInputValueNumber(question) {
  let str = prompt(`Enter ${question}`);
  while (str === null || str === "" || isNaN(Number(str))) {
    str = prompt(`Enter ${question} correctly`);
  }
  return Number(str);
}

function calculator(option, firstNumber, secondNumber) {
  let res;
  switch (option) {
    case "add":
      res = firstNumber + secondNumber;
      document.write(
        `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`
      );
      break;
    case "sub":
      res = firstNumber - secondNumber;
      document.write(
        `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`
      );
      break;
    case "mult":
      res = firstNumber * secondNumber;
      document.write(
        `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`
      );
      break;
    case "div":
      res = firstNumber / secondNumber;
      document.write(
        `${firstNumber} : ${secondNumber} = ${firstNumber / secondNumber}`
      );
      break;
    default:
      document.write("Try again. You enter wrong option");
  }
  return res;
}

const option = getOption();
const a = getInputValueNumber("first number");
const b = getInputValueNumber("second number");

calculator(option, a, b);
