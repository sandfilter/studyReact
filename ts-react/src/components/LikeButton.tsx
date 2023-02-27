import React, {useState, useEffect, useRef, useContext} from "react";
import useMouseTracker from "../hooks/useMousePosition";
import { ThemeContext } from "../App";

const LikeButton: React.FC = () => {
  // const [obj, setObj] = useState({like:0, on:true})
  const [like, setLike] = useState(0)
  const likeRef = useRef(0)
  const didMountRef = useRef(false)
  const [on, setOn] = useState(true)
  const domRef = useRef<HTMLInputElement>(null)
  const positions = useMouseTracker()
  const theme = useContext(ThemeContext)
  console.log(theme)
  const style = {
    background: theme.background,
    color: theme.color
  }
  useEffect(() => {
    console.log('running')
    document.title = `click ${like} `
  },[like])
  useEffect(()=>{
    if(didMountRef.current){
      console.log('this is updata')
    }else{
      didMountRef.current = true
    };
  })
  useEffect(()=>{
    if( domRef && domRef.current) {
      domRef.current.focus()
    }
  })
  function handleAlertClick(){
    setTimeout(()=>{
      alert('you clicked on ' + likeRef.current)
    },3000)
  }
  return (
    <>
      {/* <button onClick={() => {setObj( {like: obj.like + 1, on: obj.on} )}}>
        { obj.like } 👍
        </button> 
      <button onClick={() => {setObj({ like: obj.like, on: !obj.on })}}>
        { obj.on ? 'ON':'OFF' }
      </button>  */}
      {/* <h3>X: {positions.x}, Y: { positions.y}</h3> */}
      <input type="text" ref={domRef}/>
      <button style={style} onClick={() => {setLike( like + 1 ); likeRef.current++}}>
      { like } 👍
      </button> 
      <button onClick={() => {setOn( !on )}}>
      { on ? 'ON':'OFF' }
      </button> 
      <button onClick={handleAlertClick}> alert</button>
    </>
  )
}

export default LikeButton;