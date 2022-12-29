import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const RANDOM_NUMBER_RANGE = 100;

const gameText = {
  description: 'Find the greatest common divisor of given numbers.',
  correctAnswer: 'Correct!',
  incorrectAnswer: (incorrectAnswer, correctAnswer) => `'${incorrectAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
};

const getGcd = (x, y) => {
  if (y > x) return getGcd(y, x);
  if (!y) return x;
  return getGcd(y, x % y);
};

const getQuestion = () => {
  const number1 = getRandomNumber(RANDOM_NUMBER_RANGE);
  const number2 = getRandomNumber(RANDOM_NUMBER_RANGE);

  return ({
    text: `${number1} ${number2}`,
    value: getGcd(number1, number2),
  });
};

const checkAnswer = (answer, number) => Number(answer) === number;

const runGcdGame = () => {
  runGame(
    getQuestion,
    gameText,
    checkAnswer,
  );
};

export default runGcdGame;
