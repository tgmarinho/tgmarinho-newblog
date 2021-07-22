import { animated } from 'react-spring'

import useBoop from '@/hooks/useBoop'
import { ClapIcon } from '@/components/icons'

const Clap = () => {
  const [styleClick, triggerClick] = useBoop({
    scale: 1.2,
    delay: 200,
  })
  const [styleHover, triggerHover] = useBoop({
    rotation: 4,
    delay: 200,
  })

  console.log(triggerClick)
  console.log(triggerHover)

  return (
    <div className="container">
      <div onMouseEnter={triggerHover}>
        <animated.div style={styleHover}>
          <button onClickCapture={triggerClick}>
            <animated.div style={styleClick}>
              <ClapIcon size={50} />
            </animated.div>
          </button>
        </animated.div>
      </div>
    </div>
  )
}
export default Clap
