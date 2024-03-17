import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"


export default function App() {

  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const API_URL = "https://65e72d4e53d564627a8e2b69.mockapi.io/api/v1"
  async function fetchTodos() {
    try {
      // https://mockapi.io/projects/65e72d4e53d564627a8e2b6a
      const response = await axios.get(`${API_URL}/todos`)
      console.log(response.data)
      setTodos(response.data)
      setIsLoading(false)
    } catch(error) {
      console.log(error)
    }
  }

  async function deleteTodo(id) {
    try {
      setIsLoading(true)
      const response = await axios.delete(`${API_URL}/todos/${id}`)
      console.log(response.data)
      await fetchTodos()
      setIsLoading(false)
    } catch(error) {
      console.log(error)
    } 
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div>
      <div>Todos</div>
      { isLoading && <div>Loading ...</div> }
      { !isLoading &&
        todos.map((todo, index) => {
          return(
            <div key={index} style={{display:"flex"}}>
              <div>{todo.id} {todo.name} {todo.status}</div>
              <div>
                <Link to={`/todo/${todo.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => {
                  deleteTodo(todo.id)
                }}>Delete</button>
              </div>
            </div>
          )
        })
      }
      
    </div>
  )
}

