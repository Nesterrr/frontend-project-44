import runGame, { GAME_ERROR_TYPE } from '../index.js';
import { getRandomNumber } from '../utils.js';

const PROGRESSION_MIN_BEGIN_NUMBER = 0;
const PROGRESSION_MAX_BEGIN_NUMBER = 10;
const MIN_PROGRESSION_STEP = 2;
const MAX_PROGRESSION_STEP = 5;
const MIN_PROGRESSION_LENGTH = 8;
const MAX_PROGRESSION_LENGTH = 15;

const gameDescription = 'What number is missing in the progression?';

const getProgression = (begin, step, length) => Array.from(
  { length },
  (_, index) => (begin + index) * step,
);

const showProgression = (progression, index) => Object.assign([], progression, { [index]: '..' }).join(' ');

const getQuestion = () => {
  const progression = getProgression(
    getRandomNumber(PROGRESSION_MIN_BEGIN_NUMBER, PROGRESSION_MAX_BEGIN_NUMBER),
    getRandomNumber(MIN_PROGRESSION_STEP, MAX_PROGRESSION_STEP),
    getRandomNumber(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH),
  );
  const index = getRandomNumber(0, progression.length - 1);

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
