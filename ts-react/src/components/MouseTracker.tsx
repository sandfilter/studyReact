import React, {useState, useEffect} from "react";

const MouseTracker: React.FC= () =>{
  const [positions, setPosition ] = useState({x:0, y:0})
  useEffect( () => {
    console.log('add effect', positions.x)
    const updateMouse = (e:MouseEvent) => {
      console.log('inner')
      setPosition( { x:e.clientX, y:e.clientY})
    }
    document.addEventListener('click', updateMouse)
    return () => {
      console.log('remove effect', positions.x)
      document.removeEventListener('click',updateMouse);
    }
  }, [])
  console.log('before render', positions.x)
  return (
    <p>X: {positions.x}, Y: { positions.y}</p>
  )
}
export default MouseTracker;