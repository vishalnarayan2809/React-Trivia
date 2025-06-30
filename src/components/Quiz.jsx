import {decode} from 'html-entities';

export default function Quiz(props){

    return <>
            <div className="quiz">
            <h2>{decode(props.question)}</h2>
          <div>
            {props.options.map((option,index) => 
                (<label key={index}>{decode(option)}
                <input 
                type='radio' 
                name={`question_${props.questionId}`} 
                value={option}  
              >
                    </input>
                    </label>))}</div>
            </div>

            </>
}