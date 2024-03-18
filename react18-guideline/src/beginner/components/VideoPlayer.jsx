import { useRef, useEffect } from "react";
import PropTypes from 'prop-types';

export default function VideoPlayer({src,isPlaying}) {

    const ref = useRef(null);
  
    // useEffect https://www.w3schools.com/react/react_useeffect.asp

    useEffect(() => {
      if(isPlaying) {
        ref.current.play() 
      } else {
        ref.current.pause()
      }
    })
    // }) This run after every render
    // } , []) This runs only on mount (when the component appears)
    // } ,[isPlaying]) // This runs on mount *and also* if either isPlayer have changed since the last
  
    return (
      <>
        <video ref={ref} src={src} loop playsInline style={{width:"250px"}}/>
      </>
    )

}

VideoPlayer.propTypes = {
    src : PropTypes.string,
    isPlaying : PropTypes.bool
}

