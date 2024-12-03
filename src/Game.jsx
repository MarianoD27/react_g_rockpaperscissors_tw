/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import Results from './Results'


const Game = () => {
  const [userLast, setUserLast] = useState(null)
  const [cpuLast, setCpuLast] = useState(null)
  const [userScore, setUserScore] = useState(0)
  const [cpuScore, setCpuScore] = useState(0)
  const [totalGames, setTotalGames] = useState(0)
  const [res, setRes] = useState(0)

  // show controls
  const [showButtons1, setShowButtons1] = useState('flex')

  // turns stuff
  const [turns, setTurns] = useState(10)
  const [turns2, setTurns2] = useState(10)
  const [showTurns, setShowTurns] = useState(true)

  const logic = (u, c) => {
    if (u == c) {
      return 2;
    } else if ((u == 'r' && c == 's') || (u == 's' && c == 'p') || (u == 'p' && c == 'r')) { return 1 } else { return -1 }
  }
  const decision = (userChoice) => {
    const choices = ['r', 'p', 's']
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)]
    const val = logic(userChoice, cpuChoice)
    setRes(val)
    setCpuLast(cpuChoice)
    setUserLast(userChoice)
    setTotalGames(totalGames + 1)
    if (val == 1) {
      setUserScore(userScore + 1)
    } else if (val == -1) {
      setCpuScore(cpuScore + 1)
    }

  }

  const reset = () => {
    setTotalGames(0)
    setUserLast(null)
    setCpuLast(null)
    setUserScore(0)
    setCpuScore(0)
    setRes('')
  }


  useEffect(() => {
    if (totalGames == turns || (showTurns == true)) { setShowButtons1('hidden') } else { setShowButtons1('flex') }
  }, [totalGames, showTurns])


  const handleTurns = (x) => {
    setTurns2(x)
  }
  const acceptTurns = () => {
    setTurns(turns2)
    setShowTurns(false)
    console.log(showTurns)
  }



  return (
    <div className='relative pb-40'>

      {showTurns == true && totalGames == 0 ?
        <div className='flex flex-col md:flex-row md:gap-6 gap-2 justify-center items-center mb-4 bg-black/50 backdrop-blur w-fit mx-auto p-2 rounded-lg'>
          <h1 className='text-2xl'>It's a {turns2} round match</h1>
          <p className='text-xs mb-1'>Press OK to continue</p>
          <div className='flex gap-4 text-2xl'>
            <button onClick={() => handleTurns(3)}>3</button>
            <button onClick={() => handleTurns(5)}>5</button>
            <button onClick={() => handleTurns(10)}>10</button>
            <button onClick={() => handleTurns(15)}>15</button>
            <button onClick={() => handleTurns(20)}>20</button>
            <input type="number" className='w-12 rounded-lg bg-blue-800 border border-white focus:border-blue-400 hover:border-blue-800 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center' onChange={(e) => handleTurns(e.target.value)} />
            <button onClick={acceptTurns}>OK</button>
          </div>
        </div> : null}

      {showTurns == false && totalGames == 0 ? < button className='absolute top-0 right-0 text-xs border border-white p-1 rounded-lg bg-blue-950 hover:text-blue-950 hover:bg-blue-500 transition' onClick={() => setShowTurns(true)}>Edit Rounds</button> : null}


      <h1 className='text-2xl mb-4 text-center'>Choose One:</h1>
      <div className={`${showButtons1} gap-8 justify-center max-w-[700px] mx-auto mb-8 transition`}>
        <button onClick={() => decision('r')}><img src="r.png" alt="r" className='rounded-full w-[110px] hover:opacity-100 opacity-60 shadow-sm shadow-black hover:shadow-lg hover:shadow-blue-500 hover:scale-110 active:scale-95 transition' /></button>
        <button onClick={() => decision('p')}><img src="p.png" alt="p" className='rounded-full w-[110px] hover:opacity-100 opacity-60 shadow-sm shadow-black hover:shadow-lg hover:shadow-blue-500 hover:scale-110 active:scale-95 transition' /></button>
        <button onClick={() => decision('s')}><img src="s.png" alt="s" className='rounded-full w-[110px] hover:opacity-100 opacity-60 shadow-sm shadow-black hover:shadow-lg hover:shadow-blue-500 hover:scale-110 active:scale-95 transition' /></button>
      </div>



      <Results r={res} uL={userLast} cL={cpuLast} uS={userScore} cS={cpuScore} tG={totalGames} reset={reset} turns={turns} />


    </div >
  )


}




export default Game
