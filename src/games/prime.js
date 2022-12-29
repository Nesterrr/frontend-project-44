import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const PlayerAnswer = {
  yes: 'yes',
  no: 'no',
};

const RANDOM_NUMBER_RANGE = 100;

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

const gameText = {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  correctAnswer: 'Correct!',
  incorrectAnswer: () => 'Incorrect!',
};

const getQuestion = () => {
  const randomNumber = getRandomNumber(RANDOM_NUMBER_RANGE);
  return ({
    text: randomNumber,
    value: randomNumber,
  });
};

const checkAnswer = (answer, number) => {
  const isPrime = getIsPrime(number);
  return (isPrime && answer === PlayerAnswer.yes) || (!isPrime && answer === PlayerAnswer.no);
};

const runPrimeGame = () => {
  runGame(
    getQuestion,
    gameText,
    checkAnswer,
  );
};

export default runPrimeGame;
