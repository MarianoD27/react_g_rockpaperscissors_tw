import React, { useEffect, useState, useCallback } from 'react'
import GameOver from './GameOver'
useState

const Results = (props) => {

  const [msg, setMsg] = useState('Results:')
  const [uImg, setUImg] = useState('')
  const [cImg, setCImg] = useState('')

  const [lg, setLg] = useState('')
  const [l2g, setL2g] = useState('')
  const [l3g, setL3g] = useState('')
  const [l4g, setL4g] = useState('')
  const [l5g, setL5g] = useState('')
  const [l6g, setL6g] = useState('')
  const [l7g, setL7g] = useState('')
  const [l8g, setL8g] = useState('')
  const [l9g, setL9g] = useState('')
  const [l10g, setL10g] = useState('')

  const [manualReset, setManualReset] = useState(true)
  const [resultsArray, setResultsArray] = useState([])
  const [showGameOver, setshowGameOver] = useState(true)

  useEffect(() => {
    setUImg('user')
    setCImg('user')
    if (props.tG == props.turns) {
      setTimeout(() => setshowGameOver(true), 2000);
    }
    setL2g(lg)
    setL3g(l2g)
    setL4g(l3g)
    setL5g(l4g)
    setL6g(l5g)
    setL7g(l6g)
    setL8g(l7g)
    setL9g(l8g)
    setL10g(l9g)
    if (props.r == 1) {
      setUImg(`${props.uL}W`)
      setCImg(`${props.cL}L`)
      setMsg("You've Won")
      setLg('w')
    } else if (props.r == -1) {
      setUImg(`${props.uL}L`)
      setCImg(`${props.cL}W`)
      setMsg("You've Lost")
      setLg('l')
    } else if (props.r == 2) {
      setUImg(`${props.uL}`)
      setCImg(`${props.cL}`)
      setMsg("It's a Tie")
      setLg('t')
    }
  }, [props.tG])

  useEffect(() => {
    if (props.tG > 0 && lg != '') {
      setResultsArray(resultsArray => [...resultsArray, lg])
    }
  }, [props])


  const handleManualReset = () => {
    setMsg('The game has been reset')
    setManualReset(!manualReset)
  }
  useEffect(() => {
    setLg('')
    setL2g('')
    setL3g('')
    setL4g('')
    setL5g('')
    setL6g('')
    setL7g('')
    setL8g('')
    setL9g('')
    setL10g('')
    props.reset()
    setResultsArray([])
    setshowGameOver(false)
  }, [manualReset])


  const handleL = (x) => {
    if (x == 'w') { return 'green' }
    if (x == 't') { return 'yellow' }
    if (x == 'l') { return 'red' }
  }

  const [hoverTxt, setHoverTxt] = useState('Total Games')


  return (
    <div className='max-w-[1000px] mx-auto bg-white/10 backdrop-blur-3xl m-2 p-2 rounded-3xl h-full'>

      {showGameOver ?


        <GameOver reset={handleManualReset} tG={props.tG} uS={props.uS} cS={props.cS} r={resultsArray} handleL={handleL} resArray={resultsArray} />

        : null}


      <h1 className='text-center text-2xl mb-4'>{msg}</h1>

      <div className='md:flex md:justify-around'>
        {/* Stats (first set of 3x3) */}
        <div>
          <div className='flex justify-center gap-8 items-center mb-4'>
            <img src={`${uImg}.png`} alt="uL" className='rounded-full w-[100px] shadow-lg shadow-black hover:shadow-green-500' />
            <button className='h-28 w-28 rounded-full text-3xl bg-gradient-to-b from-blue-800 to-purple-800 flex flex-col items-center justify-center p-4 shrink-0 grow-0 border border-white shadow-lg shadow-black hover:scale-110' onClick={() => handleManualReset()} onMouseEnter={() => setHoverTxt('Restart?')} onMouseLeave={() => setHoverTxt('Total Games')}><p className='text-xl leading-none'>{hoverTxt}</p>{props.tG}</button>
            <img src={`${cImg}.png`} alt="cL" className='rounded-full w-[100px] shadow-lg shadow-black hover:shadow-lg hover:shadow-red-500' />
          </div>
          <div className='flex justify-center gap-8 items-center mb-6'>
            <button className='h-28 w-28 rounded-full text-3xl bg-gradient-to-b from-blue-800 to-green-800 flex flex-col items-center justify-center p-4 shrink-0 grow-0 border border-white shadow-lg shadow-black' disabled><p>Won</p>{props.uS}</button>
            <button className='h-28 w-28 rounded-full text-3xl bg-gradient-to-b from-blue-800 to-yellow-800 flex flex-col items-center justify-center p-4 shrink-0 grow-0 border border-white shadow-lg shadow-black' disabled><p>Tied</p>{props.tG - props.uS - props.cS}</button>
            <button className='h-28 w-28 rounded-full text-3xl bg-gradient-to-b from-blue-800 to-red-800 flex flex-col items-center justify-center p-4 shrink-0 grow-0 border border-white shadow-lg shadow-black' disabled><p>Lost</p>{props.cS}</button>
          </div>
        </div>

        {/* 2 Advanced Stats (2nd set) */}
        <div className='flex flex-col justify-between'>
          <div className='flex justify-center gap-2 items-center mb-4'>
            <div className={`h-10 w-10 rounded-full bg-gradient-to-b to-gray-700 border border-white shadow-sm hover:shadow-md shadow-white hover:shadow-white from-${handleL(lg)}-800`}></div>
            <div className={`h-10 w-10 rounded-full bg-gradient-to-b to-gray-700 border border-white shadow-sm hover:shadow-md shadow-white hover:shadow-white from-${handleL(l2g)}-800`}></div>
            <div className={`h-10 w-10 rounded-full bg-gradient-to-b to-gray-700 border border-white shadow-sm hover:shadow-md shadow-white hover:shadow-white from-${handleL(l3g)}-800`}></div>
            <div className={`h-10 w-10 rounded-full bg-gradient-to-b to-gray-700 border border-white shadow-sm hover:shadow-md shadow-white hover:shadow-white from-${handleL(l4g)}-800`}></div>
            <div className={`h-10 w-10 rounded-full bg-gradient-to-b to-gray-700 border border-white shadow-sm hover:shadow-md shadow-white hover:shadow-white from-${handleL(l5g)}-800`}></div>
            <div className={`h-10 w-10 rounded-full bg-gradient-to-b to-gray-700 border border-white shadow-sm hover:shadow-md shadow-white hover:shadow-white from-${handleL(l6g)}-800`}></div>
            <div className={`h-10 w-10 rounded-full bg-gradient-to-b to-gray-700 border border-white shadow-sm hover:shadow-md shadow-white hover:shadow-white from-${handleL(l7g)}-800`}></div>
            <div className={`h-10 w-10 rounded-full bg-gradient-to-b to-gray-700 border border-white shadow-sm hover:shadow-md shadow-white hover:shadow-white from-${handleL(l8g)}-800`}></div>
            <div className={`h-10 w-10 rounded-full bg-gradient-to-b to-gray-700 border border-white shadow-sm hover:shadow-md shadow-white hover:shadow-white from-${handleL(l9g)}-800`}></div>
            <div className={`h-10 w-10 rounded-full bg-gradient-to-b to-gray-700 border border-white shadow-sm hover:shadow-md shadow-white hover:shadow-white from-${handleL(l10g)}-800`}></div>

          </div>

          {/* 2 Averages */}
          <div className='flex justify-center gap-8 items-center mb-6'>
            <button className='h-28 w-28 rounded-full text-3xl bg-gradient-to-b from-blue-800 to-green-800 flex flex-col items-center justify-center p-4 shrink-0 grow-0 border border-white shadow-lg shadow-black' disabled><p className='text-xl'>Won %</p>{props.uS}</button>
            <button className='h-28 w-28 rounded-full text-3xl bg-gradient-to-b from-blue-800 to-yellow-800 flex flex-col items-center justify-center p-4 shrink-0 grow-0 border border-white shadow-lg shadow-black' disabled><p className='text-xl'>Tied %</p>{props.tG - props.uS - props.cS}</button>
            <button className='h-28 w-28 rounded-full text-3xl bg-gradient-to-b from-blue-800 to-red-800 flex flex-col items-center justify-center p-4 shrink-0 grow-0 border border-white shadow-lg shadow-black' disabled><p className='text-xl'>Lost %</p>{props.cS}</button>
          </div>
        </div>
      </div>
      <div className='hidden from-red-800'></div>
      <div className='hidden from-yellow-800'></div>
      <div className='hidden from-green-800'></div>
    </div >
  )
}

export default Results