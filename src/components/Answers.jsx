import {decode} from 'html-entities';
import clsx from 'clsx';

export default function Answers(props){
        const selected_answer = props.selectedAnswer[`question_${props.questionId}`]
        

    return <>
            <div className="answers">
                    <h2>{decode(props.question)}</h2>
                  <div>
                    {props.options.map((option,index) => {
                        const isCorrect = option === props.correctAnswer;
                        const isSelected = option === selected_answer
                        
                       const className = clsx('',{
                            right: isCorrect ,
                            wrong:!isCorrect && isSelected
                        })

                       return <label key={index} className={className}>{decode(option)}
                        <input 
                        type='radio' 
                        name={`question_${props.questionId}`} 
                        value={option}
                        disabled={true}  
                      >
                            </input>
                            </label>})}</div>
                            
                    </div>
                    </>
}