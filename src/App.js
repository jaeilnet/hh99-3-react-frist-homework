import { Route, Switch } from "react-router-dom"
import { Home } from "./Home"
import { Input } from "./Input"

function App() {
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
