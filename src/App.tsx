import { useState } from "react";
import { Header } from "./Header/Header";
import { TaskColumn } from "./TaskColumn/TaskColumn";
import { tasks } from "./assets/data";

function App() {
  const [state, setState] = useState(tasks);
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      <Header state={state} setState={setState} />
      <TaskColumn
        setState={setState}
        state={state}
        setActiveCard={setActiveCard}
        activeCard={activeCard}
      />
    </>
  );
}

export default App;
