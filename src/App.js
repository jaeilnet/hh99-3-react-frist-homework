import styled from "styled-components"
import { Route, Switch } from "react-router-dom"
import { Home } from "./components/Home"
import { Input } from "./components/Input"
import { Detail } from "./components/Detail"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadCardFB } from "./redux/modules/word"

const Header = styled.div`
  /* width: 100%; */
  height: 10vh;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-top: 5vh;
  z-index: 99;
`

function App() {
  const dispatch = useDispatch()
  const cardList = useSelector((state) => state.word.cardList)

  useEffect(() => {
    dispatch(loadCardFB())
  }, [cardList.length])
  return (
    <div className="App">
      <Header>나만의 단어장</Header>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/addword">
          <Input />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
      </Switch>
    </div>
  )
}

export default App
