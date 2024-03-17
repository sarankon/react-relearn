import { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

import FormComponent from './components/FormComponent';
import TransactionComponent from './components/TransactionComponent';
import DataContext from './context/DataContext';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import PageComponent from './components/PageComponent';

export default function App() {

  const itemList = [
    {key: uuidv4(), title: 'Item 1', amount: 10 },
    {key: uuidv4(), title: 'Item 2', amount: 20 },
    {key: uuidv4(), title: 'Item 3', amount: 30 },
  ]
  const [items, setItems] = useState(itemList)

  function getFormData(data) {
    setItems((prevData) => {
      return [data, ...prevData]
    })
  }

  // reducer state
  const [count, setCount] = useState(0)
  const reducer = (state, action) => {
    switch(action.type) {
      case 'add': return state + action.playload
      case 'sub': return state - action.playload
      case 'cls': return 0
      default: break
    }
  }
  const [result, dispatchx] = useReducer(reducer, count)
    
  return (
    <>
      <DataContext.Provider value={items}>
        <div>บัญชีรายรับ - รายจ่าย</div>
        <FormComponent onSubmitData={getFormData}/>
        <TransactionComponent />
      </DataContext.Provider>

      <div>Count: {result}</div>
      <div>
        <button onClick={() => dispatchx({type: 'sub', playload: 10})}>-</button>
        <button onClick={() => dispatchx({type: 'add', playload: 5})}>+</button>
        <button onClick={() => dispatchx({type: 'cls'})}>C</button>
      </div>
    </>
  )
}
