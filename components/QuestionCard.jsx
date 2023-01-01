import { useState } from 'react';
import styled from 'styled-components';

const AnswersContainer = styled.div`
  display: grid;
  row-gap: 1.5em;
  justify-items: center;
`

const AnswerBtn = styled.button`
    border-radius: 999px;
    box-shadow: #5E5DF0 0 10px 20px -10px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
    font-size: 1em;
    font-weight: 700;
    line-height: 1.5em;
    opacity: 1;
    outline: 0 solid transparent;
    padding: 8px 18px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 100%;
    word-break: break-word;
    border: 0;
    margin: auto;
    &:hover{
      opacity: 0.7;
    }    
`;

const NextQst = styled.button`
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
  font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
  font-size: 1em;
  font-weight: 700;
  height: 4rem;
  width: 12rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover{
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  }
`

function QuestionCard({ data, category, score, setScore, setScoreCard }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [click, setClick] = useState(false)
  const [selected, setSelected] = useState(null)

  //Get questions by selected category:
  const questions = data.filter(el => el.category === category)

  const handleSelected = (answer) => {
    //check is the answer is correct:
    if (selected === answer && selected.isCorrect) {
        return 'green'
    } else if (selected === answer && !selected.isCorrect) {
        return 'red'
    } else if (answer.isCorrect) {
        return 'green'
    }
  }

    const handleAnswerClick = (answer) => {
        setSelected(answer)

        if (answer.isCorrect) {
            setScore(score + 1)
        }

        setClick(true)
    }

  const handleNextQuestionClick = () => {
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
      setClick(false)
      setSelected(null)
    } else {
      setScoreCard(true)
      setClick(false)
    }
  }


  return (
    <div className="Card">
      <div>
        <h2>Question {currentQuestion + 1}/{questions.length}</h2>
        <h2>{questions[currentQuestion].question}</h2>
      </div>
      <AnswersContainer>
        {questions[currentQuestion].answers.map((answer) => (
          <AnswerBtn 
            key={answer.ansId} 
            style={{backgroundColor: `${selected ? handleSelected(answer) : '#5E5DF0'}`}} 
            onClick={() => handleAnswerClick(answer)}
            disabled={selected}>
            {answer.answerText}
          </AnswerBtn>
        ))}
        {click && <NextQst onClick={handleNextQuestionClick}>Next Question</NextQst>}
      </AnswersContainer>
    </div>
  );
}

export default QuestionCard;
