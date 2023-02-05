import runGame, { GAME_ERROR_TYPE } from '../index.js';
import { getRandomNumber } from '../utils.js';

const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_LENGTH = 15;
const MIN_PROGRESSION_DELTA = 2;
const PROGRESSION_DELTA_RANGE = 8;
const PROGRESSION_START_NUMBER_RANGE = 10;

const gameDescription = 'What number is missing in the progression?';

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
    gameDescription,
    checkAnswer,
    { incorrectAnswerType: GAME_ERROR_TYPE.incorrectAnswerLong },
  );
};

export default runProgressionGame;
