import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const RANDOM_NUMBER_RANGE = 100;

const isPrime = (value) => {
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

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getCorrectAnswer = (value) => (isPrime(value) ? 'yes' : 'no');

const getQuestionAnswer = () => {
  const randomNumber = getRandomNumber(0, RANDOM_NUMBER_RANGE);
  return ({
    question: randomNumber,
    answer: getCorrectAnswer(randomNumber).toString(),
  });
};

const runPrimeGame = () => {
  runGame(
    getQuestionAnswer,
    gameDescription,
  );
};

export default runPrimeGame;
