import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameText = {
  description: 'What is the result of the expression?',
  correctAnswer: 'Correct!',
  incorrectAnswer: (incorrectAnswer, correctAnswer) => `'${incorrectAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
};

const RANDOM_NNUMBER_RANGE = 100;

const checkAnswer = (answer, number) => Number(answer) === number;

const getQuestion = () => {
  const number1 = getRandomNumber(RANDOM_NNUMBER_RANGE);
  const number2 = getRandomNumber(RANDOM_NNUMBER_RANGE);

  return ({
    text: `${number1} + ${number2}`,
    value: number1 + number2,
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
