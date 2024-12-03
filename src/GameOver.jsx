import React, { useEffect, useState } from 'react'

const GameOver = (props) => {

  console.log(props.resArray)

  const [endMsg, setEndMsg] = useState('')
  const [moreStats, setMoreStats] = useState(false)



  useEffect(() => {
    if (props.tG == 10) {
      if (props.uS == props.cS) {
        setEndMsg("It Ends in a Tie!?")
      } else if (props.uS > props.cS) {
        setEndMsg("You Win!")
      } else setEndMsg("CPU Wins, better luck next time")
    }
    if (props.tG == 10) {
      setMoreStats(false)
      setEndMsg('')
    }
  }, [props])


  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 rounded-xl z-10 backdrop-blur bg-gray-800/60 transition-all'>
      <div className='absolute m-10 bg-gradient-to-br bottom-0 top-0 right-0 left-0 rounded-xl from-blue-600/90 to-black/90 backdrop-blur flex flex-col justify-around items-center pt-8'>

        <h1 className='text-3xl'>{endMsg}</h1>

        <div className='flex justify-center gap-8 items-center mb-6'>
          <button className='h-28 w-28 rounded-full text-3xl bg-gradient-to-b from-blue-800 to-green-800 flex flex-col items-center justify-center p-4 shrink-0 grow-0 border border-white shadow-lg shadow-black'><p>Won</p>{props.uS}</button>
          <button className='h-28 w-28 rounded-full text-3xl bg-gradient-to-b from-blue-800 to-yellow-800 flex flex-col items-center justify-center p-4 shrink-0 grow-0 border border-white shadow-lg shadow-black'><p>Tied</p>{props.tG - props.uS - props.cS}</button>
          <button className='h-28 w-28 rounded-full text-3xl bg-gradient-to-b from-blue-800 to-red-800 flex flex-col items-center justify-center p-4 shrink-0 grow-0 border border-white shadow-lg shadow-black'><p>Lost</p>{props.cS}</button>
        </div>


        <div className='flex justify-center max-w-[100%] overflow-clip gap-2 items-center mb-4'>
          {props.r.map((g, i) => {
            return (
              <div key={i} className={`h-8 w-8 rounded-full bg-gradient-to-b to-gray-700 border border-white shadow-sm hover:shadow-md shadow-white hover:shadow-white from-${props.handleL(g)}-800`}>
              </div>
            )
          })}
        </div>

        {/* Advanced */}
        {moreStats ?
          <div className='flex justify-center gap-8 items-center mb-6'>
            <button className='h-28 w-28 rounded-full text-xl bg-gradient-to-b from-blue-800 to-green-800 flex flex-col items-center justify-center p-4 shrink-0 grow-0 border border-white shadow-lg shadow-black'><p>Won %</p><p className='text-3xl'>{props.uS * 100 / props.tG}%</p></button>
            <button className='h-28 w-28 rounded-full text-xl bg-gradient-to-b from-blue-800 to-yellow-800 flex flex-col items-center justify-center p-4 shrink-0 grow-0 border border-white shadow-lg shadow-black'><p>Tied %</p><p className='text-3xl'>{(props.tG - props.uS - props.cS) * 100 / props.tG}%</p></button>
            <button className='h-28 w-28 rounded-full text-xl bg-gradient-to-b from-blue-800 to-red-800 flex flex-col items-center justify-center p-4 shrink-0 grow-0 border border-white shadow-lg shadow-black'><p>Lost %</p><p className='text-3xl'>{props.cS * 100 / props.tG}%</p></button>
          </div>
          : null}

        {/* Buttons */}
        <div className='flex gap-4'>
          <button onClick={() => props.reset()} className='bg-white border border-blue-950 px-4 rounded-xl text-blue-900 font-semibold hover:scale-110 hover:bg-blue-300 active:scale-95 self-center'>RESTART</button>
          {moreStats == false ? <button onClick={() => setMoreStats(true)} className='bg-blue-900 border border-white px-4 rounded-xl text-white font-semibold hover:scale-110 hover:bg-blue-300 active:scale-95 self-center'>MORE STATS</button> : null}

        </div>
      </div>
    </div>

  )
}

export default GameOver