import readlineSync from 'readline-sync';

const TOTAL_QUESTIONS = 3;

export const GAME_ERROR_TYPE = {
  incorrectAnswerLong: 'incorrectAnswerLong',
  incorrectAnswerShort: 'incorrectAnswerShort',
};

const gameText = {
  correctAnswer: 'Correct!',
  [GAME_ERROR_TYPE.incorrectAnswerLong]: (incorrectAnswer, correctAnswer) => `'${incorrectAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  [GAME_ERROR_TYPE.incorrectAnswerShort]: 'Incorrect!',
};

const getErrorText = (userAnswer, answer, incorrectAnswerType) => {
  switch (incorrectAnswerType) {
    case GAME_ERROR_TYPE.incorrectAnswerLong:
      return gameText.incorrectAnswerLong(userAnswer, answer);
    case GAME_ERROR_TYPE.incorrectAnswerShort:
    default:
      return gameText.incorrectAnswerShort;
  }
};

const runGame = (
  getQuestion,
  gameDescription,
  checkAnswer,
  config,
) => {
  let questionIndex = 0;
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(gameDescription);

  while (questionIndex < TOTAL_QUESTIONS) {
    const { question, answer } = getQuestion();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const isCorrectAnswer = checkAnswer(answer, userAnswer);

    const result = isCorrectAnswer
      ? gameText.correctAnswer
      : getErrorText(userAnswer, answer, config.incorrectAnswerType);

    console.log(result);

    if (!isCorrectAnswer) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
    questionIndex += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
