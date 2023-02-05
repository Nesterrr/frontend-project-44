import runGame, { GAME_ERROR_TYPE } from '../index.js';
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

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestion = () => {
  const randomNumber = getRandomNumber(0, RANDOM_NUMBER_RANGE);
  return ({
    question: randomNumber,
    answer: randomNumber,
  });
};

const checkAnswer = (number, userAnswer) => {
  const isPrime = getIsPrime(number);
  return (isPrime && userAnswer === PlayerAnswer.yes)
    || (!isPrime && userAnswer === PlayerAnswer.no);
};

const runPrimeGame = () => {
  runGame(
    getQuestion,
    gameDescription,
    checkAnswer,
    { incorrectAnswerType: GAME_ERROR_TYPE.incorrectAnswerShort },
  );
};

export default runPrimeGame;
