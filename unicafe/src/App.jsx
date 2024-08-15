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

const Section = ({statistics, counting, subTitle, comments: [goodLabel, neutralLabel, badLabel, allLabel, averageLabel,positiveLabel]})=>{
if (counting.good ===0 && counting.bad=== 0) {
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
    <section>
      <SubTitle subTitle = {subTitle} />
      <Statistics label ={goodLabel} data={counting.good} />
      <Statistics label ={neutralLabel} data={counting.neutral} />
      <Statistics label ={badLabel} data={counting.bad} />
      <Statistics label ={allLabel} data={statistics.addition} />
      <Statistics label ={averageLabel} data={statistics.calculations.averge} /> 
      <Statistics label ={positiveLabel} data={statistics.calculations.positive} />
    </section>
  )
}

const SubTitle = ({subTitle}) =>{
  return(
    <>
      <h2>{subTitle}</h2>
    </>
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
  /*--------labels and titles-------- */
  const title = "give feedback"
  const labels =["good","neutral","bad","all","average", "positive"]
  const subTitle= "statistics"

/*------------useStates------------ */
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

/*--------event handlers------------ */
  const hanleGood =  () => { setGood(good + 1)}
  const hanleNeutral = () => { setNeutral(neutral + 1)}
  const hanleBad = () => { setBad(bad + 1)}
  const functions = {hanleGood, hanleNeutral, hanleBad}
  const counting = {good, neutral, bad}

  /*-----------calculations----------- */
  const allComments = good + neutral + bad
  const calculations = () => { 
    if (good>0) {
    return({
      positive: (good/allComments)*100+"%",
      averge: (good-bad)/allComments
    })
    } else{return({
      positive: 0,
      averge: 0
    })}
  } 
  const statistics = {
    addition: allComments,
    calculations: calculations()
  }
  return (
    <>
    <Header text={title} />
    <Content1 comments = {labels} onClick={functions} />
    <Section 
      subTitle = {subTitle} 
      comments ={labels} 
      counting={counting} 
      statistics={statistics}/>
    </>
    /*I consider that the code I have developed for steps 1.6 and 1.7 already complies with what 
    was requested for step 1.8 */
  )
}

export default App