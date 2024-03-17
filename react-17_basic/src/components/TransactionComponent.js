import { useContext } from "react"
import DataContext from "../context/DataContext"

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