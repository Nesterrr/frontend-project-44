import readlineSync from 'readline-sync';

const questionsCount = 3;

const runGame = (
  getQuestionAnswer,
  gameDescription,
) => {
  let questionIndex = 0;
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(gameDescription);

  while (questionIndex < questionsCount) {
    const { question, answer } = getQuestionAnswer();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');

    questionIndex += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
