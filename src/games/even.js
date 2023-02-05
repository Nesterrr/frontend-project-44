import runGame, { GAME_ERROR_TYPE } from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const RANDOM_NUMBER_RANGE = 100;

const checkAnswer = (number, userAnswer) => (
  number % 2 === 0 && userAnswer === 'yes')
    || (number % 2 !== 0 && userAnswer === 'no');

const getQuestion = () => {
  const randomNumber = getRandomNumber(0, RANDOM_NUMBER_RANGE);
  return ({
    question: randomNumber,
    answer: randomNumber,
  });
};

const runEvenGame = () => {
  runGame(
    getQuestion,
    gameDescription,
    checkAnswer,
    { incorrectAnswerType: GAME_ERROR_TYPE.incorrectAnswerShort },
  );
};

export default runEvenGame;
