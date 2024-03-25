'use client'

import { useEffect, useState } from "react"

async function getTodos() {
    const url = 'https://65e72d4e53d564627a8e2b69.mockapi.io/api/v1/todos'
    const response = await fetch(url)

    if(response.ok) {
        console.log(response.ok)
    } else {
        throw new Error('cannot fetch todo')
    }

    return response.json()
}

export default function Page() {

    const [todoState, setTodoState] = useState([])
    
    const initTodos = async () => {
        try {
            const result = await getTodos()
            setTodoState(result)
        } catch(error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        initTodos()
    }, [])

    console.log(todoState)

    return(
        <div>
            Todos
            {
                todoState.map((todo) => {
                    return <>{todo.name}</>
                })
            }
        </div>
    )
}