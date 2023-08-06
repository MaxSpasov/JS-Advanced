function calculate(num1, num2, operator) {
    switch (operator) {
      case "+":
        console.log(num1 + num2);
        break;
      case "-":
        console.log(num1 - num2);
        break;
      case "*":
        console.log(num1 * num2);
        break;
      case "/":
        console.log(num1 / num2);
        break;
      case "%":
        console.log(num1 % num2);
        break;
      case "**":
        console.log(num1 ** num2);
        break;
      default:
        console.log("Invalid operator");
        break;
    }
  }
  calculate(3, 5.5, '*')