import {decode} from 'html-entities';

export default function Answers(props){
        const selected_answer = props.selectedAnswer[`question_${props.questionId}`]
        

    return <>
            <div className="answers">
                    <h2>{decode(props.question)}</h2>
                  <div>
                    {props.options.map((option,index) => {
                        const isCorrect = option === props.correctAnswer;
                        const isSelected = option === selected_answer
                        let optionClass = '';
                        if(isCorrect && isSelected){
                            optionClass = 'right'
                        }
                        else if(!isCorrect && isSelected){
                            optionClass = 'wrong'
                        }
                        else if(isCorrect && !isSelected){
                            optionClass = 'right'
                        }

                       return <label key={index} className={optionClass}>{decode(option)}
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