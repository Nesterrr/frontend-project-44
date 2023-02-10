import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const RANDOM_NUMBER_RANGE = 100;

const operators = ['+', '-', '*'];

const calc = (number1, number2, operator) => {
  switch (operator) {
    case '*':
      return number1 * number2;
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getQuestionAnswer = () => {
  const number1 = getRandomNumber(0, RANDOM_NUMBER_RANGE);
  const number2 = getRandomNumber(0, RANDOM_NUMBER_RANGE);

  const operator = operators[getRandomNumber(0, 2)];
  return ({
    question: `${number1} ${operator} ${number2}`,
    answer: calc(number1, number2, operator).toString(),
  });
};

const runCalcGame = () => {
  runGame(
    getQuestionAnswer,
    gameDescription,
  );
};

export default runCalcGame;
