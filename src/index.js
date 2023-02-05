import readlineSync from 'readline-sync';
import cli from './cli.js';

const TOTAL_QUESTIONS = 3;

const runGame = (
  getQuestion,
  gameText,
  checkAnswer,
) => {
  let questionIndex = 0;
  const name = cli();

  console.log(gameText.description);

  while (questionIndex < TOTAL_QUESTIONS) {
    const { question, answer } = getQuestion();
  
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ')

    const isCorrectAnswer = checkAnswer(answer, userAnswer);
  
    const result = isCorrectAnswer
      ? gameText.correctAnswer
      : gameText.incorrectAnswer(userAnswer, answer);

    console.log(result);
  
    if (!isCorrectAnswer) {
      return;
    }
    questionIndex += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
