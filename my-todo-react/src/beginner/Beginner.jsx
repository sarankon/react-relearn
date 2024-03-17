import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./components/Header";
import VideoPlayer from "./components/VideoPlayer";
import { IconA, IconB } from "./components/Icon";
import Image from "./components/Image";
import Checkbox from "./components/Checkbox";

export default function Beginner() {

    const todoList = [
        {
            text: 'coding react',
            isChecked: true
        }, {
            text: 'doing document react',
            isChecked: false
        }
    ]

    const [counter, setCounter] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const videoSrc = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"

    function btnCounterClick() {
        setCounter(counter + 1)
    }

    function btnPlayClick() {
        setIsPlaying(!isPlaying)
    }

    return(
        <>
            <div>
                <div>Basic Component</div>
                <div><Header/></div>
                <div><IconA/>,<IconB/></div>
                <div><Image imageUrl="https://picsum.photos/536/354"/></div>
            </div>
            <hr/>
            <div>
                <div>useState()</div>
                <div>Now Counter is {counter}</div>
                <div><button onClick={btnCounterClick}>Add 1 to Counter</button></div>
            </div>
            <hr/>
            <div>
                <div>Condition</div>
                <div><Checkbox text="codeing react" isChecked={true} /></div>
                <div><Checkbox text="doing document react" isChecked={false} /></div>
            </div>
            <hr/>
            <div>
                <div>Loop</div>
                <div>
                    {
                        todoList.map((todo, index)=>{
                            return(
                                <Checkbox key={index} text={todo.text} isChecked={todo.isChecked}/>
                            )
                        })
                    }
                </div>
            </div>
            <hr/>
            <div>
                <div><VideoPlayer src={videoSrc} isPlaying={isPlaying}/></div>
                <div><button onClick={btnPlayClick}>{ isPlaying?'Stop Video':'Play Video'}</button></div>
            </div>
            <hr/>
            <div>
                <div><a href={'/todos'}>Todos App : Refresh</a></div>
                <div>
                <Link to={'/todos'}>
                    <a href="#">Todos App : Single Page</a>
                </Link>
                </div>
            </div>
        </>
    )

}