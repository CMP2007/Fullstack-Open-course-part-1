const Section =({func, list, texts:[next,vote, title1, title2, ...texts], uses:[id, numVotes, moreVoted] })=>{  
  return(
    <div>
      <Votes id= {id} list={list} texts={texts} numVotes={numVotes} title={title1}/>
      <Button func={func[1]} texts={vote} />
      <Button func={func[0]} texts={next}/>
      <Votes id= {moreVoted} list={list} texts={texts} numVotes={numVotes} title={title2} />
    </div>
  )
}

const Button = ({func, texts})=>{
  return(
    <>
      <button onClick={func}>{texts}</button>
    </>
  )
}

const Votes = ({ id, list, numVotes, title, texts:[has,votes]})=>{ 
  
  return(
    <div>
      <h1>{title}</h1>
      <p>{list[id]}</p>
      <span>{has}{numVotes[id]}{votes}</span>
    </div>
  )
}

import { useState } from 'react'
const App = () =>  {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)  
  const [vote, setVote] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, })
  const [moreVoted, setMoredVoted] = useState(null)
  /*---------- generate a random number ---------- */
  const random =(min, max)=>{return(Math.floor(Math.random()*(max - min + 1)))}
  /**-------- get the most votes ----------*/
  const getMoreVoted = () => {
    let maxVote = 0;
    let maxKey = null;
    for (const key in vote) {
      if (vote[key] > maxVote) {
        maxKey = key
        maxVote = vote[key]
      }
    }
    setMoredVoted(maxKey)
  };
  /*---------- get the random number ----------*/
  const getNumber = ()=>{
    const number = random(0,7)
    setSelected(number)
    getMoreVoted()
    
  }
  /*---------- register the votes ---------- */
    const votes = ()=>{
      const newVote = {...vote}
      newVote[selected] ++
      setVote(newVote)
    }
  /*----------  arrys for the components ----------*/
  const funcs = [getNumber, votes]
  const texts = ["next anecdote","vote","Anecdote of the day","Anecdote with more votes","has "," votes"]
  const uses = [selected, vote, moreVoted]

  return (
    <>
    <Section list={anecdotes} uses={uses} func={funcs}  texts={texts} />
    </>
  )
}

export default App