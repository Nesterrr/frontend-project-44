import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_LENGTH = 15;
const MIN_PROGRESSION_DELTA = 2;
const PROGRESSION_DELTA_RANGE = 8;
const PROGRESSION_START_NUMBER_RANGE = 10;

const gameText = {
  description: 'What number is missing in the progression?',
  correctAnswer: 'Correct!',
  incorrectAnswer: (incorrectAnswer, correctAnswer) => `'${incorrectAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
};

const getProgression = (min, max) => {
  const length = Math.round(Math.random() * (max - min + 1)) + min;
  const delta = getRandomNumber(PROGRESSION_DELTA_RANGE) + MIN_PROGRESSION_DELTA;
  const start = getRandomNumber(PROGRESSION_START_NUMBER_RANGE);

  return Array.from(
    { length },
    (_, index) => (start + index) * delta - index,
  );
};

const showProgression = (progression, index) => Object.assign([], progression, { [index]: '..' }).join(' ');

const getQuestion = () => {
  const progression = getProgression(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH);
  const index = getRandomNumber(progression.length);

  return ({
    question: showProgression(progression, index),
    answer: progression[index],
  });
};

const checkAnswer = (answer, userAnswer) => Number(answer) === Number(userAnswer);

const runProgressionGame = () => {
  runGame(
    getQuestion,
    gameText,
    checkAnswer,
  );
};

export default runProgressionGame;
