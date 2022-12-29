import readlineSync from 'readline-sync';
import cli from './cli.js';

const TOTAL_QUESTIONS = 3;

const GameStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
};

const getAnswer = () => readlineSync.question('Your answer: ');

const showResult = (result) => console.log(result);

const askQuestion = (
  getQuestion,
  checkAnswer,
  gameText,
  name,
) => {
  const {
    text,
    value,
  } = getQuestion();

  console.log(`Question: ${text}`);

  const answer = getAnswer();

  const isCorrectAnswer = checkAnswer(answer, value);

  const result = isCorrectAnswer
    ? gameText.correctAnswer
    : gameText.incorrectAnswer(answer, value);

  showResult(result);

  if (!isCorrectAnswer) {
    console.log(`Let's try again, ${name}!`);
    return GameStatus.failure;
  }
  return GameStatus.success;
};

const runGame = (
  getQuestion,
  gameText,
  checkAnswer,
) => {
  let questionIndex = 0;
  const name = cli();

  console.log(gameText.description);

  while (questionIndex < TOTAL_QUESTIONS) {
    const result = askQuestion(
      getQuestion,
      checkAnswer,
      gameText,
      name,
    );
    if (result === GameStatus.failure) {
      return;
    }
    if (result === GameStatus.success) {
      questionIndex += 1;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
