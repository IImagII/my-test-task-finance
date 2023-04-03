import cn from 'classnames'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'

import styles from './NumberDisplay.module.scss'

const cx = classNames.bind(styles)

export const useNumberDisplay = ({ number }) => {
  const [previousNumber, setPreviousNumber] = useState(null)
  const [numberColor, setNumberColor] = useState(null)
  const classes = cx({ red: !numberColor, green: numberColor })

  useEffect(() => {
    if (previousNumber !== null && number !== previousNumber) {
      const newColor = number > previousNumber ? true : false

      setNumberColor(newColor)
    }
    setPreviousNumber(number)
  }, [number, previousNumber])

  return (
    <div className={cn(classes)}>
      <span>{number}</span>
    </div>
  )
}
