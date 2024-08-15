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

const Statistics = ({statistics, counting, subTitle, comments: [goodLabel, neutralLabel, badLabel, allLabel, averageLabel,positiveLabel]})=>{
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
      <table>
        <tbody>
          <StatistiLine label ={goodLabel} data={counting.good} />
          <StatistiLine label ={neutralLabel} data={counting.neutral} />
          <StatistiLine label ={badLabel} data={counting.bad} />
          <StatistiLine label ={allLabel} data={statistics.addition} />
          <StatistiLine label ={averageLabel} data={statistics.calculations.averge} /> 
          <StatistiLine label ={positiveLabel} data={statistics.calculations.positive} />
          </tbody>
      </table>
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

const StatistiLine = ({data, label})=>{  
  return(
    <tr>
      <th><label htmlFor="">{label}</label></th>
      <th><span> {data}</span></th>
    </tr>
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
    <Statistics 
      subTitle = {subTitle} 
      comments ={labels} 
      counting={counting} 
      statistics={statistics}/>
    </>
  )
}

export default App