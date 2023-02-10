import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const RANDOM_NUMBER_RANGE = 100;

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (value) => (isEven(value) ? 'yes' : 'no');

const getQuestionAnswer = () => {
  const randomNumber = getRandomNumber(0, RANDOM_NUMBER_RANGE);
  return ({
    question: randomNumber,
    answer: getCorrectAnswer(randomNumber),
  });
};

const runEvenGame = () => {
  runGame(
    getQuestionAnswer,
    gameDescription,
  );
};

export default runEvenGame;
