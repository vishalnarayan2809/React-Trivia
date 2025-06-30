import { useState,useEffect } from 'react'
import './App.css'
import blob1 from './assets/blob1.png';
import blob2 from './assets/blob2.png';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import Answers from './components/Answers';
import { data as dataArr } from './demo.js';

function App() {  
  const[newGame,setnewGame] = useState(true)
  const[checkQuestions,setcheckQuestions] = useState(false)
  const[seeAnswers,setseeAnswers] = useState(false)
  const[data,setdata] = useState()
  const[answer,setAnswers] = useState([])

  useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      .then(res => res.json())
      .then(data => {
        // Check if the API response is successful and has results
        if (data.response_code === 0 && data.results) {
          const Arr = data.results.map((item, index) => {
            const idx = Math.floor(Math.random() * item.incorrect_answers.length)
            let options = [...item.incorrect_answers]
            options.splice(idx, 0, item.correct_answer)
            return {
              id: index,
              question: item.question,
              options: options,
              correct_answer: item.correct_answer,
            }
          })
          setdata(Arr)
        } else {
          // Fallback to demo data if API fails
          console.warn('API request failed, using demo data')
          // Transform demo data to match expected structure
          const transformedData = dataArr.map((item, index) => {
            const idx = Math.floor(Math.random() * item.incorrect_answers.length)
            let options = [...item.incorrect_answers]
            options.splice(idx, 0, item.correct_answer)
            return {
              id: index,
              question: item.question,
              options: options,
              correct_answer: item.correct_answer,
            }
          })
          setdata(transformedData)
        }
      })
      .catch(error => {
        // Handle network errors or rate limiting
        console.error('Failed to fetch from API:', error)
        console.log('Using demo data as fallback')
        // Transform demo data to match expected structure
        const transformedData = dataArr.map((item, index) => {
          const idx = Math.floor(Math.random() * item.incorrect_answers.length)
          let options = [...item.incorrect_answers]
          options.splice(idx, 0, item.correct_answer)
          return {
            id: index,
            question: item.question,
            options: options,
            correct_answer: item.correct_answer,
          }
        })
        setdata(transformedData)
      })
}, [newGame])

  function toggleNewGame(){
    setcheckQuestions(true)
  }

  function toggleAnswers(){
    setcheckQuestions(false)
    setseeAnswers(true)
  }

  function resetGame(){
    setseeAnswers(false)
    setcheckQuestions(false)
    setnewGame(!newGame)
    setAnswers([]) 
  }

  function handleAnswers(e){
      e.preventDefault()
      const formData = new FormData(e.target)
      const selectedAnswer = {}
      for(let[key,value] of formData.entries()){
            selectedAnswer[key] = value
      }
      setAnswers(selectedAnswer)
      toggleAnswers()
      setcheckQuestions(false)
  }
  

  function renderQuiz(){
           if (!data || !Array.isArray(data) || data.length === 0) return null;
    return data.map((item,index) =>{
      return <Quiz 
      key={item.id}
      questionId={item.id}
      question={item.question} 
      options={item.options}
      />
    })
  }

  function showCorrectAnswer(){
    if (!data || !Array.isArray(data) || data.length === 0) return null;
    return  data.map((item,index) =>{
      return <Answers 
      key={item.id}
      questionId={item.id}
      question={item.question} 
      options={item.options}
      selectedAnswer = {answer}
      correctAnswer = {item.correct_answer}
      />
    })
  }

  function calculateScore(){
    if(!data || !Array.isArray(data) || !answer || Object.keys(answer).length === 0){return 0};
    let counter = 0;
    data.forEach(item => {
      const selectedAnswer = answer[`question_${item.id}`]
      if(selectedAnswer === item.correct_answer){
        counter++;
      }
    })
    return counter
  }

  return (
    <>
    <img src={blob2} alt="" className="blob-bottom-left " />
    <img src={blob1} alt="" className="blob-top-right" />
    {!checkQuestions && !seeAnswers && <Welcome onClick={toggleNewGame}/>}
    {checkQuestions &&   data && Array.isArray(data) && data.length > 0 &&
    <form onSubmit={handleAnswers} >
    {<>{
     renderQuiz()}
    <button type="submit" className="check">Check Answers</button> </>}
    </form >}
    { seeAnswers && data && Array.isArray(data) && data.length > 0 && 
    <>{showCorrectAnswer()}<span id="score">You scored {calculateScore()}/{data.length} correct answers</span><button id="playAgain" onClick={()=>resetGame()}>Play again</button></>}
    </>
  )
}

export default App
