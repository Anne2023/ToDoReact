import {useState} from "react";

export default function App() {
  const [todos, setTodos] = useState([
    {id: 1,
    text: "Criar funcionalidade X no sistema",
    category: "Trabalho",
    isCompleted: false,
  },
  {id: 2,
    text: "Criar funcionalidade X no sistema",
    category: "Trabalho",
    isCompleted: false,
  },
  {id: 3,
    text: "Criar funcionalidade X no sistema",
    category: "Trabalho",
    isCompleted: false,
  },
  ])



  return (
    <div>App</div>
  )
}
