import React, { useCallback, useState, useEffect } from 'react'
import '../styles/level1.css'

function refreshPage(){ 
  window.location.reload(); 
}
function TouchGameLevelOne() {
  const stageRef = React.createRef()

  const [size, setSize] = useState(0)
  const [position, setPosition] = useState({ x: null, y: null })
  const [mouseDown, setMouseDown] = useState(false)

  const getDotBigger = useCallback((e) => {
    setSize(size + 80)
    const board = document.getElementsByClassName('board')[0]
    const dimensions = 

// console.log(stageRef.current.getBoundingClientRect())
console.log(board.getBoundingClientRect())
  }, [setSize, size])


  const initDot = useCallback((event) => {
    if (position.x === null) {
      setPosition({ x: event.clientX, y: event.clientY })
      getDotBigger()
      setMouseDown(true)
    }
  }, [position, setPosition, getDotBigger, setMouseDown])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (mouseDown) {
  //       getDotBigger()
  //     }
  //   }, 300)
  //   return () => clearInterval(interval)
  // }, [mouseDown, getDotBigger])

  return (
    <div className="yellow-board">
      
      <div ref={stageRef} className="board" onMouseDown={(e) => { initDot(e) }}
      >
         <button type="button" onClick={ refreshPage }> <span>Reload</span> </button>
        <div
          className="dot"
          onMouseDown={() => { getDotBigger ()}}
          onMouseUp={() => setMouseDown(false)}
          style={{
            top: position.y - size / 2,
            left: position.x - size / 2,
            width: size,
            height: size,
          }}>
        </div>
      </div>
     
    </div>
  )
}

export default TouchGameLevelOne