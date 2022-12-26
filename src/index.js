import readlineSync from 'readline-sync';
import cli from './cli.js';

const TOTAL_QUESTIONS = 2;

const askQuestion = (value) => {
  console.log(`Question: ${value}`);
};

const getAnswer = () => readlineSync.question('Your answer: ');

const showResult = (result) => console.log(result);

const runGame = (
  getQuestion,
  gameText,
  checkAnswer,
) => {
  let isEnd = false;
  let questionIndex = 0;
  const name = cli();

  console.log(gameText.description);

  while (!isEnd) {
    const {
      text,
      value,
    } = getQuestion();

    askQuestion(text);

    const answer = getAnswer();

    const isCorrectAnswer = checkAnswer(answer, value);

    const result = isCorrectAnswer
      ? gameText.correctAnswer
      : gameText.incorrectAnswer(answer, value);

    showResult(result);

    if (!isCorrectAnswer) {
      isEnd = true;
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (questionIndex === TOTAL_QUESTIONS) {
      isEnd = (questionIndex === TOTAL_QUESTIONS);
    }
    questionIndex += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
