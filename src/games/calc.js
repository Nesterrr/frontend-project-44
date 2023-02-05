import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameText = {
  description: 'What is the result of the expression?',
  correctAnswer: 'Correct!',
  incorrectAnswer: (incorrectAnswer, correctAnswer) => `'${incorrectAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
};

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
    gameText,
    checkAnswer,
  );
};

export default runCalcGame;
