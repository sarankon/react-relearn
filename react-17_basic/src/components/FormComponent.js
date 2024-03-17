import { useEffect, useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

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