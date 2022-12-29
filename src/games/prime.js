import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const getIsPrime = (value) => {
  if (value <= 1) {
    return false;
  }

  for (let i = 2; i < value; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};

const RANDOM_NNUMBER_RANGE = 100;

const gameText = {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  correctAnswer: 'Correct!',
  incorrectAnswer: () => 'Incorrect!',
};

const getQuestion = () => {
  const randomNumber = getRandomNumber(RANDOM_NNUMBER_RANGE);
  return ({
    text: randomNumber,
    value: randomNumber,
  });
};

const checkAnswer = (answer, number) => {
  const isPrime = getIsPrime(number);
  return (isPrime && answer === 'yes') || (!isPrime && answer === 'no');
};

const runPrimeGame = () => {
  runGame(
    getQuestion,
    gameText,
    checkAnswer,
  );
};

export default runPrimeGame;
