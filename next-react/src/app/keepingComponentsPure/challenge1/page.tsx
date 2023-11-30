'use client';

import { useState, useEffect } from 'react';
import Clock from './clock';
import Link from 'next/link';

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function App() {
  const time = useTime();
  return (
    <div className='p-10'>
    <p className='mb-10'><Link href="/">返回</Link></p>
      <Clock time={time} />
    </div>

  );
}
