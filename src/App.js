import React from 'react'

//components
import Home from './Components/Home'

const App = () => {
  document.title = "Weather app"
  console.log(navigator);

  return (
    <Home />
  )
}

export default App