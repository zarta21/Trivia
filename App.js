import { useState } from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';
import ScoreCard from './components/ScoreCard';
import { useEffect } from 'react';
import LoadingCard from './components/LoadingCard';
import StartCard from './components/StartCard';

function App() {
  const [score, setScore] = useState(0)
  const [scoreCard, setScoreCard] = useState(false)
  const [data, setData] = useState(null)
  const [category, setCategory] = useState(null)

  useEffect(() => {
    //GET questions from MongoDB:
    const fetchQuestions = async () => {
      const res = await fetch('/questions/')
      const json = await res.json()

      if (res.ok) {
        setData(json) //questions
      }
    }

    fetchQuestions()
  },[])

  return (
    <div className="App">
      {category
      ? (data 
          ? (<>
            <h1>💡{category.toUpperCase()} Quiz</h1> 
            {!scoreCard && <QuestionCard data={data} category={category} score={score} setScore={setScore} setScoreCard={setScoreCard} />} 
            <ScoreCard data={data} category={category} score={score} scoreCard={scoreCard} />
            </>) 
          : (<LoadingCard>Loading data</LoadingCard>)
        )
      : <StartCard category={category} setCategory={setCategory} />}
    </div>
  );
}

export default App;
