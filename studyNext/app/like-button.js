'use client';

import { useState } from 'react';

export default function LikeButton() {
  const [likes,setLikes] = useState(0);

  function btnClick(){
    setLikes(likes + 1);
  }
  
  return <buttom onClick={btnClick}> Like({likes}) </buttom>
}