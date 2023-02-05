import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameText = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  correctAnswer: 'Correct!',
  incorrectAnswer: () => 'Incorrect',
};

const RANDOM_NUMBER_RANGE = 100;

const checkAnswer = (number, userAnswer) => (
  number % 2 === 0 && userAnswer === 'yes')
    || (number % 2 !== 0 && userAnswer === 'no');

const getQuestion = () => {
  const randomNumber = getRandomNumber(RANDOM_NUMBER_RANGE);
  return ({
    question: randomNumber,
    answer: randomNumber,
  });
};

const runEvenGame = () => {
  runGame(
    getQuestion,
    gameText,
    checkAnswer,
  );
};

export default runEvenGame;
