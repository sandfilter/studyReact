'use client';

import { useState } from 'react';

export default function Panel({ children }:any) {
  const [open, setOpen] = useState(true);
  return (
    <section className="panel">
      <button onClick={() => setOpen(!open)} className='bg-gray-700 w-auto h-auto p-2 text-white rounded-lg mb-3'>
        {open ? 'Collapse' : 'Expand'}
      </button>
      {open && children}
    </section>
  );
}
