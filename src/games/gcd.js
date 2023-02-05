import runGame, { GAME_ERROR_TYPE } from '../index.js';
import { getRandomNumber } from '../utils.js';

const RANDOM_NUMBER_RANGE = 100;

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  if (y > x) return getGcd(y, x);
  if (!y) return x;
  return getGcd(y, x % y);
};

const getQuestion = () => {
  const number1 = getRandomNumber(0, RANDOM_NUMBER_RANGE);
  const number2 = getRandomNumber(0, RANDOM_NUMBER_RANGE);

  return ({
    question: `${number1} ${number2}`,
    answer: getGcd(number1, number2),
  });
};

const checkAnswer = (userAnswer, answer) => Number(answer) === Number(userAnswer);

const runGcdGame = () => {
  runGame(
    getQuestion,
    gameDescription,
    checkAnswer,
    { incorrectAnswerType: GAME_ERROR_TYPE.incorrectAnswerLong },
  );
};

export default runGcdGame;
