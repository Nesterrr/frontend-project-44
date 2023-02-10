import runGame, { GAME_ERROR_TYPE } from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const RANDOM_NUMBER_RANGE = 100;

const checkAnswer = (number, userAnswer) => Number(userAnswer) === number;

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

const getQuestion = () => {
  const number1 = getRandomNumber(0, RANDOM_NUMBER_RANGE);
  const number2 = getRandomNumber(0, RANDOM_NUMBER_RANGE);

  const operator = operators[getRandomNumber(0, 2)];
  return ({
    question: `${number1} ${operator} ${number2}`,
    answer: calc(number1, number2, operator),
  });
};

const runCalcGame = () => {
  runGame(
    getQuestion,
    gameDescription,
    checkAnswer,
    { incorrectAnswerType: GAME_ERROR_TYPE.incorrectAnswerLong },
  );
};

export default runCalcGame;
