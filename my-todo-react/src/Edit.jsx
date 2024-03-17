import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import axios from "axios"

export default function Edit() {
    const { id } = useParams()
    const [todos, setTodos] = useState({
        name: ''
    })

    const API_URL = "https://65e72d4e53d564627a8e2b69.mockapi.io/api/v1"
    async function fetchTodos(id) {
        try {
          // https://mockapi.io/projects/65e72d4e53d564627a8e2b6a
          const response = await axios.get(`${API_URL}/todos/${id}`)
          console.log(response.data)
          setTodos(response.data)
        } catch(error) {
          console.log(error)
        }
    }

    async function updaetName() {
        try {
          const response = await axios.put(`${API_URL}/todos/${id}`, {
            name: todos.name
          })
          console.log(response.data)
        } catch(error) {
          console.log(error)
        } 
      }

    useEffect(() => {
        fetchTodos(id)
    }, [id])

    function handleNameChange(event) {
        setTodos((previousState) => ({
            ...previousState,
            name: event.target.value
        }))
    }

    return(
        <>
            <Link to={`/todos`}>
                <button>Back</button>
            </Link>
            <div>
                <div>Todo ID: {id}</div>
                <div>
                    { todos.name }, { todos.status }
                </div>
                <div>
                    <input type="text" value={todos.name} onChange={handleNameChange}/>, 
                    <input type="status" value={todos.status} />
                </div>
            </div>
            <div>
                <button onClick={() => {
                    updaetName()
                }}>Update</button>
            </div>
        </>
    )
}