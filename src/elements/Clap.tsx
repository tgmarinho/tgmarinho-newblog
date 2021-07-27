import { animated } from 'react-spring'
import React from 'react'
import useBoop from '@/hooks/useBoop'
import { StarOutilineIcon, StarSolidIcon } from '@/components/icons'

const Clap = () => {
  const [styleHover, triggerHover] = useBoop({
    rz: -1,
    x: 1,
    y: -1,
    timing: 500,
    delay: 100,
  })

  const [styleStarred, triggerStarred] = useBoop({
    rotation: 4,
    rx: 10,
    scale: 1.2,
    delay: 200,
  })

  const [isStarred, setIsStarred] = React.useState(false)

  const handleClick = () => {
    triggerStarred()
    setIsStarred(!isStarred)
  }

  return (
    <div className="container">
      <animated.div onMouseMove={triggerHover} style={styleHover}>
        <button onClickCapture={handleClick}>
          <animated.div style={styleStarred}>
            {isStarred ? (
              <StarSolidIcon size={50} />
            ) : (
              <StarOutilineIcon size={50} />
            )}
          </animated.div>
        </button>
      </animated.div>
    </div>
  )
}
export default Clap
