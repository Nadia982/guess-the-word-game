import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
// import Letter from "./components/Letter";
import { boardDefault } from "./components/Words";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <h1>Guess the Word</h1>

      <AppContext.Provider value={{ board, setBoard }}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
