import React, { useCallback, useState, useEffect, useRef } from 'react'
import '../styles/level2.css'
function TouchGameLevelTwo () {

  const BLACK_BOARD_SIZE = 1200
  const blackboard = useRef(null)
  const [size, setSize] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })
  const [mouseDown, setMouseDown] = useState(false)

  const getDotBigger = useCallback(() => {
    setSize(size + 80)
  }, [setSize, size])

  const initDot = useCallback((event) => {
    if (mousePosition.x === null) {
      const b = blackboard.current.getBoundingClientRect()
      setMousePosition({
        x: event.clientX - b.x,
        y: event.clientY - b.y,
      })
      getDotBigger()
      setMouseDown(true)
    }
  }, [mousePosition, setMousePosition, getDotBigger, setMouseDown])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (mouseDown) {
  //       getDotBigger()
  //     }
  //   }, 300)
  //   return () => clearInterval(interval)
  // }, [mouseDown, getDotBigger])

  useEffect(() => {
    console.info(blackboard.current.offsetLeft)
  }, [])

  return (
    <div className="yellow-board">
      <div
        className="black-board"
        onMouseDown={() => {getDotB}}
        onMouseUp={() => setMouseDown(false)}
        ref={blackboard}
        style={{ width: BLACK_BOARD_SIZE }}
      >
        <div
          className="dot"
          onMouseDown={() => { setMouseDown(true) }}
          style={{
            top: mousePosition.y - size / 2,
            left: mousePosition.x - size / 2,
            width: size,
            height: size,
          }}>
        </div>
      </div>
    </div>
  )
}

export default TouchGameLevelTwo