import { useCallback, useMemo, useState } from "react";
import { useToggle, useFetch } from "./hooks";
import ThemeProvider from "./context/ThemeContext";
import Child from "./components/Child";

const App = () => {
  const [count, setCount] = useState(0);
  const [isOpen, toggle] = useToggle(false)
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  )

  const numbers = useMemo(() => {
    return [1,2,3,4]
  }, [])

  const expensive = useCallback(function expensive() {
    console.log("Here is berto")
  }, [])

  console.log("parent rendered")

  if (loading) {
    return <p>loading</p>
  }

  return (
    <ThemeProvider>
      <div>here is the div {count}</div>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <button onClick={toggle}>{isOpen ? "open" : "closed"}</button>
      <Child numbers={numbers} expensive={expensive}/>
      {
        data?.map((user:any) => (
          <p key={user.id}>{user.name}</p>
        ))
      }
    </ThemeProvider>
  )
}

export default App;