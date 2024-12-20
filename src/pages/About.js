import React, { useRef, useState } from "react";

function About() {
  const[todoList, setTodoList]=useState(initialTasks)
  const[task, setTask] = useState("")
  const[taskIndex, setTaskIndex]=useState(null)
  const idRef = useRef(todoList.length + 1)

  const handleCheckboxChange = (taskId)=>{
    setTodoList(
      todoList.map((todo)=>todo.id === taskId ? {...todo, done: !todo.done} : todo)
    )
  }

  const handleDeleteTask = (taskId)=>{
    setTodoList(
      todoList.filter((todo)=>todo.id !== taskId)
    )
  }

  const handleAddTask = ()=>{
    const newTask = {
      id: idRef.current,
      taskName: task,
      done: false
    }
    
    if(task.length > 3){
      setTodoList([...todoList, newTask])
      idRef.current += 1;
      setTask("")
    }else{
      alert("Task too short to add")
    }
  }

  const handleActivateEditInput = (taskId)=>{
   setTaskIndex(taskId)
  }

  return (
    <div className="p-10">
      <div className="space-x-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 rounded-md"
        />
        <button
          onClick={handleAddTask}
          className="bg-green-700 hover:bg-green-600 rounded-md  text-white px-6 py-2"
        >
          Add task
        </button>
      </div>
      <div className="mt-10 space-y-3">
        {todoList.map((todo) => {
          return (
            <div key={todo.id} className="flex space-x-4">
              <div className="space-x-2">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(todo.id)}
                  id={todo.id}
                  checked={todo.done}
                />
                {taskIndex === todo.id ? (
                  <input type="text" className="border p-1 rounded-md" />
                ) : (
                  <label htmlFor={todo.id}>{todo.taskName}</label>
                )}
              </div>
              <div className="space-x-3">
                {taskIndex === todo.id ? (
                  <button className="bg-green-600 px-4 py-1 rounded-md text-white">
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleActivateEditInput(todo.id)}
                    className="bg-yellow-500 px-4 py-1 rounded-md text-white"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDeleteTask(todo.id)}
                  className="bg-red-500 px-4 py-1 rounded-md text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const initialTasks = [
  {
    id: 1,
    taskName: "Do homework",
    done: false,
  },
  {
    id: 2,
    taskName: "Wash dishes",
    done: true,
  },
  {
    id: 3,
    taskName: "Fold clothes",
    done: false,
  },
];

export default About;
