/**
 * Arithmetic is used in CalcBot
 * It takes three parameters:
  * operation: What operation to perform with the operands. Can be "addition", "subtraction", "multiplication", or "division"
  * a: The first operand
  * b: The second operand
*/
import Chatend from "chatend";

const { operation, a, b } = Chatend.input;

let result;
switch (operation) {
  case "addition":
    result = a + b;
    break;
  case "subtraction":
    result = a - b;
    break;
  case "multiplication":
    result = a * b;
    break;
  case "division":
    if (b == 0) Chatend.done("You can't divide by 0!", { a, b });
    result = a / b;
    break;
}
Chatend.done("The result is " + result);