import { memo, useCallback, useMemo, useState } from "react";

type ChildProps = {
  numbers: Int16Array[], 
  expensive: () => void
}

const Child = memo(({numbers, expensive}: ChildProps) => {
  console.log("child rendered")
  return (
    <button onClick={expensive}>
      {numbers.map((number, key) => <p key={key}>{number}</p>)}
    </button>
  )
})

const App = () => {
  const [count, setCount] = useState(0);

  const numbers = useMemo(() => {
    return [1,2,3,4]
  }, [])

  const expensive = useCallback(function expensive() {
    console.log("Here is berto")
  }, [])

  console.log("parent rendered")

  return (
    <>
      <div>here is the div {count}</div>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <Child numbers={numbers} expensive={expensive}/>
    </>
  )
}

export default App;