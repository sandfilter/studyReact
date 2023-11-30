/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

interface itemTS {
  name:string,
  isPacked:boolean
}

function Item({ name, isPacked }:itemTS) {
  return (
    <li className="item">
      {name} {isPacked ? '✔' : '❌'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section className='p-10'>
    <p className='mb-10'><Link href="/">返回</Link></p>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
