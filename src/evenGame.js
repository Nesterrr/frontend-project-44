import readlineSync from 'readline-sync';

const TOTAL_QUESTIONS = 2;

const gameConfig = {
  gameTextDescription: 'Answer "yes" if the number is even, otherwise answer "no".',
};

const getRandomNumber = (range) => Math.round(Math.random() * range);

const askQuestion = (randomNumber) => {
  console.log(`Question: ${randomNumber}`);
};

const showResult = (result) => console.log(result);

const getAnswer = () => readlineSync.question('Your answer: ');

const checkAnswer = (answer, number) => (
  number % 2 === 0 && answer === 'yes')
  || (number % 2 !== 0 && answer === 'no');

const runEvenGame = () => {
  let isEnd = false;
  let questionIndex = 0;

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hllo, ${name}`);
  console.log(gameConfig.gameTextDescription);

  while (!isEnd) {
    const randomNumber = getRandomNumber(100);

    askQuestion(randomNumber);

    const answer = getAnswer();

    const isCorrectAnswer = checkAnswer(answer, randomNumber);

    const result = isCorrectAnswer ? 'Correct!' : 'Incorrect';

    showResult(result);

    if (!isCorrectAnswer) {
      isEnd = true;
      return;
    }
    if (questionIndex === TOTAL_QUESTIONS) {
      isEnd = questionIndex === TOTAL_QUESTIONS;
    }
    questionIndex += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default runEvenGame;
