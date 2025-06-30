export default function Welcome(props){
    return <header>
        <h1>Quizzical</h1>
        <p>Let's Check your knowledge</p>
        <button onClick={()=>props.onClick()}>Start Quizz</button>
        </header>
}