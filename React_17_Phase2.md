# react-relearn

Kong Ruksiam

https://www.youtube.com/watch?v=KvNfS86KEA4&list=PLltVQYLz1BMAdESvJff1elnHXpETCmnOt&index=1 \
พัฒนาเว็บด้วย React 17 | สำหรับผู้เริ่มต้น [Phase1]

- ติดตั้ง React Developer Tools \
https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

- ES2015_ES6
- React

https://www.youtube.com/watch?v=3ubQZb-99fI&list=PLltVQYLz1BMAdESvJff1elnHXpETCmnOt&index=2 \
พัฒนาเว็บด้วย React 17 | สำหรับผู้เริ่มต้น [Phase2]

---

# Form
การสร้าง Function ใน Component และทำการผูก Event ใน HTML Tag 
```js
export default function FormComponent() {

    function inputTitle(event) {
        console.log(event)
    }

    function inputAmount(event) {
        console.log(event)
    }

    function saveItem(event) {
        console.log(event)
    }

    return(
        <>
            <form onSubmit={saveItem}>
                <div>
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle}/>
                </div>
                <div>
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="ระบุจำนวนเงิน" onChange={inputAmount}/>
                </div>
                <div>
                    <button type="submit">เพิ่มข้อมูล</button>
                </div>
            </form>
        </>
    )
}
```

# State
State คือ ตัวแปรที่เก็บข้อมูลภายใน Component คล้าย ๆ กับ Props
แต่การใช้งาน Props นั้น ข้อมูลจะไม่สามารถเปลี่ยนแปลงค่าได้ แต่ State สามารถทำได้

ฉะนั้น ถ้าต้องการให้ข้อมูลภายใน App สามารถเปลี่ยนแปลงค่าได้ในระหว่าง Run App
ก็จะใช้ State ซึ่งรูปแบบเดิมจะเขียนภายใน Class Component

# Stateless vs Stateful
- Stateless คือ State ที่ไม่มีการเปลี่ยนแปลงค่า (Props)
- Stateful คือ State ที่มีการเปลี่ยนแปลงค่า (State)

# React Hook
Hook เป็นฟีเจอร์ที่อยู่ใน React เวอร์ชั่น 16.8 เป็นต้นไป
ใช้สำหรับจัดการเกี่ยวกับ State หรือฟีเจอร์ต่าง ๆ ที่อยู่ภายใน React
โดยที่ไม่ต้องเขียนใน Class Component แต่เขียนจะใช้ Function Component แทน
1. เขียนใน Functional Component
2. เขียนในส่วนของ Top-Level ของ Function \
(อย่างเขียน Condition, Loop, Nested Function นอกจากจะเขียน Custom Hook)

ตัวอย่าง React Hook
1. useState
2. useEffect
3. useReducer
4. useContext
5. useMemo
6. useCallBack

# useState
ทำให้เกิดการ Render Component ใหม่เมื่อมีการเปลี่ยนแปลงค่า
``` js
import {useState} from 'react'
['stateName', 'functionNameToChangeState'] = useState(initialStateValue)
```

ตัวอย่างการใช้งาน
```js
const [name, setName] = useState('Jumbo')
const [age, setAge] = useState('30')
```

```js
import { useState } from 'react'

export default function FormComponent() {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)

    function inputTitle(event) {
        console.log(event.target.value)
        setTitle(event.target.value)
    }

    function inputAmount(event) {
        console.log(event.target.value)
        setAmount(event.target.value)
    }

    function saveItem(event) {
        event.preventDefault()
        const data = {
            title: title,
            amount: Number(amount)
        }
        console.log(data)
    }

    return(
        <>
            <form onSubmit={saveItem}>
                <div>
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/>
                </div>
                <div>
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="ระบุจำนวนเงิน" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit">เพิ่มข้อมูล</button>
                </div>
            </form>
        </>
    )
}
```

# Children to Parent (Botton-Up)
การส่งข้อมูลจากล่างขึนบน เป็นการให้ Component ลูก ส่งข้อมูลขึ้นไปให้ Component แม่

```js
// เราจะส่งชื่อ Method เข้ามาทาง Props จาก Component แม่ 
// ให้ Component ลูกเรียก Method ผ่าน Props
export default function FormComponent(props) {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)

    function inputTitle(event) {
        console.log(event.target.value)
        setTitle(event.target.value)
    }

    function inputAmount(event) {
        console.log(event.target.value)
        setAmount(event.target.value)
    }

    function saveItem(event) {
        event.preventDefault()
        const data = {
            title: title,
            amount: Number(amount)
        }
        // ตัวอย่างการเรียก Component จะส่ง Method มาที่ onSubmitData()
        console.log('Form onSubmitData', data)
        props.onSubmitData(data)
    }

    return(
        <>
            <form onSubmit={saveItem}>
                <div>
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/>
                </div>
                <div>
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="ระบุจำนวนเงิน" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit">เพิ่มข้อมูล</button>
                </div>
            </form>
        </>
    )
}
```

```js
export default function App() {

  function getFormData(data) {
    console.log('App getFormData: ', data)
  }

  return (
    <>
      <div>บัญชีรายรับ - รายจ่าย</div>
      { /* เราส่ง Method getFromData ผ่านไปที่ Props onSubmitData เพื่อให้ Component ลูกเรียกใช้ได้ */ }
      <FormComponent onSubmitData={getFormData}/>
    </>
  );
}
```

ตัวอย่าง Code ที่ใช้งานร่วมกับ useState
``` js
import FormComponent from './components/FormComponent';
import { useState } from 'react';
import TransactionComponent from './components/TransactionComponent';

export default function App() {

  const [items, setItems] = useState([])

  function getFormData(data) {
    setItems((prevData) => {
      return [data, ...prevData]
    })
  }

  return (
    <>
      <div>บัญชีรายรับ - รายจ่าย</div>
      <FormComponent onSubmitData={getFormData}/>
      <TransactionComponent items={items} />
    </>
  );
}
```

```js
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function FormComponent(props) {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)

    function inputTitle(event) {
        setTitle(event.target.value)
    }

    function inputAmount(event) {
        setAmount(event.target.value)
    }

    function saveItem(event) {
        event.preventDefault()
        const data = {
            id: uuidv4(),
            title: title,
            amount: Number(amount)
        }
        props.onSubmitData(data)
    }

    return(
        <>
            <form onSubmit={saveItem}>
                <div>
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/>
                </div>
                <div>
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="ระบุจำนวนเงิน" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit">เพิ่มข้อมูล</button>
                </div>
            </form>
        </>
    )
}
```

```js
export default function TransactionComponent(props) {
    return(
        <>
        {
            props.items.map((element, index) => {
                return(
                    <div key={element.id} style={{ display:'flex' }}>
                        <div>Title: {element.title}</div>
                        <div>Amount: {element.amount}</div>
                    </div>
                )
            })
        }
        </>
    )
}
```

# UseEffect
** Effect คือผลกระทบ
** useEffect คือผลกระทบที่เกิดขึ้นภายใน Component
ใช้เพื่อต้องการทราบว่าเกิดการอัพเดตหรือเปลี่ยนแปลงอะไรขึ้นบ้างภายใน Component
จนส่งผลให้ Component เกิดการ Render ใหม่

โดยสาเหจุหลัก ๆ ที่ Component Render ใหม่จะมาจากการเปลี่ยนแปลงค่าที่อยู่ภายใน Props และ State นั้นเอง

การใช้งาน useEffect จึงนำมาใช้งานเพื่อตรวจสอบการเปลี่ยนแปลงที่เกิดขึ้นภายใน Application ของเรา
ว่ามีข้อมูลส่วนใดบ้างที่เปลี่ยนแปลงไปจากค่าหนึ่งไปสู่อีกค่าหนึ่ง จนส่งผลให้ Render Component ใหม่อีกครั้ง


```js
useEffect(() => { }) // ทำงานทุกครั้งที่ มีการเปลี่ยนแปลง
useEffect(() => { }, [ stateName, ...]) // จะทำงานทุกครั้งที่ stateName ที่เรากำหนดมีการเปลี่ยนแปลง
useEffect(() => { }, []) // จะทำงานครั้งเดียว
```

# Context API (Global State)
ในกรณีที่ต้องการอยากให้แอพของเรามีข้อมูลกลางและอยากให้มีการแชร์ข้อมูลที่เกิดขึ้นใน Component จะทำอย่างไร
เช่น ต้องการให้ทุก ๆ Component สามารถเข้าถึงข้อมูลชุดเดียวกันได้ โดยที่ไม่ต้องใช้รูปแบบส่งข้อมูลจาก Component แม่ไปยัง Component ลูก (Props)

Context API มีองค์ประกอบ 2 ส่วนคือ
- Provider (Parent) ดูแลและจัดการข้อมูลแล้วนำไปส่งให้ Consumer
- Consumer (Children) นำข้อมูลที่ได้จาก Provider ไปสร้างหรือแสดงผลใน Component

1. สร้าง Context 
```js
import { createContext } from "react"

const DataContext = createContext()
export default DataContext
```

2. ทำการ Import Context แล้วใช้ .Provider พร้อมกำหนดค่า
```js

...
import DataContext from './context/DataContext';
...

export default function App() {

  const [items, setItems] = useState([])

  function getFormData(data) {
    setItems((prevData) => {
      return [data, ...prevData]
    })
  }

  return (
    <>
      <DataContext.Provider value={"Data from DataContext"}>
        <div>บัญชีรายรับ - รายจ่าย</div>
        <FormComponent onSubmitData={getFormData}/>
        <TransactionComponent items={items} />
      </DataContext.Provider>
    </>
  );
}
```

3. ทำการ Import Context แล้วใช้ .Consumer แล้วรับ Value มาแสดง
```js
...
import DataContext from './context/DataContext';
...

export default function FormComponent(props) {

    console.log('Render FormComponent')
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    
    useEffect(()=> {
        console.log('useEffect')
    })

    function inputTitle(event) {
        setTitle(event.target.value)
    }

    function inputAmount(event) {
        setAmount(event.target.value)
    }

    function saveItem(event) {
        event.preventDefault()
        const data = {
            id: uuidv4(),
            title: title,
            amount: Number(amount)
        }
        props.onSubmitData(data)
    }

    return(
        <>
            <div>
                <DataContext.Consumer>
                    {(value)=>{ return <p>{value}</p>}}
                </DataContext.Consumer>
            </div>
            <form onSubmit={saveItem}>
                <div>
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/>
                </div>
                <div>
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="ระบุจำนวนเงิน" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit">เพิ่มข้อมูล</button>
                </div>
            </form>
        </>
    )
}
```

# useContext 
เป็นการเรียกใช้ข้อมูลผ่าน useContext
```js
    // เรียกใช้ useContext
    const dataContext = useContext(DataContext) 

    // ส่วย Return
    <>
        {dataContext}
    </>
```

ตัวอย่างการกำหนดค่าเป็น Object ใน Context และการเอาไปใช้
```js
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

  return (
    <>
      <DataContext.Provider value={items}>
        <div>บัญชีรายรับ - รายจ่าย</div>
        <FormComponent onSubmitData={getFormData}/>
        <TransactionComponent />
      </DataContext.Provider>
    </>
  );
}
```

```js
export default function TransactionComponent() {

    const data = useContext(DataContext)
    console.log(data)

    return(
        <>
        {
            data.map((element) => {
                return(
                    <div key={element.key} style={{ display:'flex' }}>
                        <div style={{ paddingRight: '10px'}}>Title: {element.title}</div>
                        <div>Amount: {element.amount}</div>
                    </div>
                )
            })
        }
        </>
    )
}
```

# useReducer
**** เป็นการจัดการ State ในรูปแบบของ Redux \
โดยทั่วไป State สามารถอ่านค่าได้อย่างเดียว ถ้าต้องการอยากจะเปลี่ยนแปลงค่า State จะใช้ useReducer 
โดยการกำหนดรูปแบบการกระทำกับ State ของเราผ่านส่วนที่เรียกว่า Action

สร้างกลุ่มของ Action แบบต่าง ๆ

ตัวอย่างการใช้ useReducer
```js
import { useReducer, useState } from 'react';

export default function App() {

  // reducer state
  const [count, setCount] = useState(0)
  const reducer = (state, action) => {
    switch(action.type) {
      case 'add': return state + 1
      case 'sub': return state - 1
      case 'cls': return 0
      default: break
    }
  }
  const [result, dispatch] = useReducer(reducer, count)
    
  return (
    <>
      <div>Count: {result}</div>
      <div>
        <button onClick={() => dispatch({type: 'sub'})}>-</button>
        <button onClick={() => dispatch({type: 'add'})}>+</button>
        <button onClick={() => dispatch({type: 'cls'})}>C</button>
      </div>
    </>
  )
}
```

ตัวอย่างการใช้ useReducer และส่ง payload เข้าไปด้วย
```js
import { useReducer, useState } from 'react';

export default function App() {

  // reducer state
  const [count, setCount] = useState(0)
  const reducer = (state, action) => {
    switch(action.type) {
      case 'add': return state + action.payload
      case 'sub': return state - action.payload
      case 'cls': return 0
      default: break
    }
  }
  const [result, dispatch] = useReducer(reducer, count)
    
  return (
    <>
      <div>Count: {result}</div>
      <div>
        <button onClick={() => dispatch({type: 'sub', payload: 10})}>-</button>
        <button onClick={() => dispatch({type: 'add', payload: 5})}>+</button>
        <button onClick={() => dispatch({type: 'cls'})}>C</button>
      </div>
    </>
  )
}
```

# React Router
การพัฒนาแอพด้วย React ประกอบไปด้วยการแสดงผลมากว่า 1 หน้าจอ
การที่จะทำให้ผู้ใช้งานไปยังส่วนการแสดงผลต่าง ๆ ที่เกิดขึ้น จากการใช้งาน Component ในแอพ
เราจะใช้ส่วนที่เรีกยว่า Route (การสร้างเส้นทาง)

```
npm install react-router-dom
```

1. สร้าง Router/Route เพื่อกำหนดเส้นทางการเข้าถึง Component ของการกำหนด Path
2. สร้าง Switch ในการเปลี่ยนเส้นทางการเข้าถึง Component
3. กำหนด Link เพื่อเชื่อมโยง Path กับ Component

ตัวอย่างการใช้งาน *มีปัญหาตอนทำเนื่องจากหา Switch ไม่เจอคิดว่าเป็น Version ใหม่กว่าใน Tutorial*

```js
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import PageComponent from './components/PageComponent';

export default function App() {

  return (
    <>
      <Router>
        <div>
          <div>App Component</div>
          <div>
            <Link to="/pageComponent">Goto Page Component</Link>
          </div>
        </div>
        <Switch>
          <Route path="/pageComponent">
            <PageComponent/>
          </Route>
        </Switch>
      </Router>
    </>
  )
}
```

# Deploy Project

```
npm run build
```