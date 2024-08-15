const Header = ({text})=>{
  return(
    <header>
      <h1>{text}</h1>
    </header>
  )
}

const Content1 = ({comments: [good, neutral, bad], onClick})=>{
  return(
    <div>
      <Buttons text={good}  onClick={onClick.hanleGood}/>
      <Buttons text={neutral}  onClick={onClick.hanleNeutral}/>
      <Buttons text={bad}  onClick={onClick.hanleBad}/>
    </div>
  )
}

const Buttons = ({text, onClick})=>{
  return(
    <>
      <button onClick={onClick} >{text}</button>
    </>
  )
}

const Section = ({data, subTitle, comments: [goodLabel, neutralLabel, badLabel]})=>{
  return(
    <>
      <SubTitle subTitle = {subTitle} />
      <Statistics label ={goodLabel} data={data.good} />
      <Statistics label ={neutralLabel} data={data.neutral} />
      <Statistics label ={badLabel} data={data.bad} />
    </>
  )
}

const SubTitle = ({subTitle}) =>{
  return(
    <div>
      <h2>{subTitle}</h2>
    </div>
  )
}

const Statistics = ({data, label})=>{  
  return(
    <div>
      <label htmlFor="">{label}</label>
      <span> {data}</span>
      <br />
    </div>
  )
}

import { useState } from 'react' 

const App = () => {
  const title = "give feedback"
  const comments =["good","neutral","bad"]
  const subTitle= "statistics"

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const hanleGood =  () => { setGood(good + 1)}
  const hanleNeutral = () => { setNeutral(neutral + 1)}
  const hanleBad = () => { setBad(bad + 1)}

  const functions = {hanleGood, hanleNeutral, hanleBad}
  const data = {good, neutral, bad }
  return (
    <>
    <Header text={title} />
    <Content1 comments = {comments} onClick={functions} />
    <Section subTitle = {subTitle} comments ={comments} data= {data}/>
    </>
  )
}

export default App