import React, {useState, useEffect} from "react";

const useMouseTracker = () =>{
  const [positions, setPosition ] = useState({x:0, y:0})
  useEffect( () => {
    console.log('add effect', positions.x)
    const updateMouse = (e:MouseEvent) => {
      // console.log('inner')
      setPosition( { x:e.clientX, y:e.clientY})
    }
    document.addEventListener('mousemove', updateMouse)
    return () => {
      console.log('remove effect', positions.x)
      document.removeEventListener('click',updateMouse);
    }
  }, [])
  return positions
}


export default useMouseTracker