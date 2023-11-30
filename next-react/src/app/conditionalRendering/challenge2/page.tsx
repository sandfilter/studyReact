/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

interface itemTS {
  name:string,
  importance:number
}

function Item({ name, importance }:itemTS) {
  return (
    <li className="item">
      {name}
      {importance > 0 && ' ' }
      {importance > 0 && <i>importance: {importance}</i> }
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
          importance={9} 
          name="Space suit" 
        />
        <Item 
          importance={0} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          importance={6} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
