import { useState } from "react";
import to_do from "./to-do";
import to_do_form from "./to-do form";

function App() {
    const [tasks, settasks] = useState([])
    const addTask = () => {

    }
    const removeTask = () => {

    }
    const handleToggle = () => {

    }

    return (
        <div className="App">
        <header>
            <h1>To do: {tasks.length}</h1>
        </header>
        <to_do_form addTask={addTask} />
        {tasks.map((task) => {
            return (
                <to_do
                to_do={tasks}
                key={to_do.id}
                toggleTask={handleToggle}
                removeTask={removeTask}
                />
            )
        })}
       </div>
    )
}

export default Index;