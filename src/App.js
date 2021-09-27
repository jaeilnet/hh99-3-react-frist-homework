import { Route, Switch } from "react-router-dom"
import { Home } from "./Home"
import { Input } from "./Input"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { loadCardFB } from "./redux/modules/word"
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    // const wordList = await getDocs(collection(db, "wordList"))
    dispatch(loadCardFB())
    // wordList.forEach((doc) => {
    //   console.log(doc.id, doc.data())
    // })
  }, [])
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/addpage">
          <Input />
        </Route>
      </Switch>
    </div>
  )
}

export default App
