import runGame, { GAME_ERROR_TYPE } from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const RANDOM_NUMBER_RANGE = 100;

const checkAnswer = (number, userAnswer) => Number(userAnswer) === number;

const getQuestion = () => {
  const number1 = getRandomNumber(RANDOM_NUMBER_RANGE);
  const number2 = getRandomNumber(RANDOM_NUMBER_RANGE);

  return ({
    question: `${number1} + ${number2}`,
    answer: number1 + number2,
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
