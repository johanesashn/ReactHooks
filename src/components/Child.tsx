import { type ChildProps } from "../types/props"
import { memo, useEffect } from "react"
import { useTheme } from "../hooks"

const Child = memo(({numbers, expensive}: ChildProps) => {
  const { theme, toggleTheme } = useTheme()
  console.log("child rendered")

  useEffect(() => {console.log(theme)}, [theme])

  return (
    <div>
      <button onClick={toggleTheme}>theme changed</button>
      <button onClick={expensive}>
        {numbers.map((number, key) => <p key={key}>{number}</p>)}
      </button>
    </div>
  )
})

export default Child