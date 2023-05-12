import Home from "./pages/Home"
import { TwitterProvider } from "./contexts/context"

function App() {

  return (
    <div>
      <TwitterProvider>
        <Home />
      </TwitterProvider>
    </div>
  )
}

export default App
