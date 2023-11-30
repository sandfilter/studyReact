/* eslint-disable @next/next/no-img-element */
import Link from 'next/link' 

export default function Home() {
  return (
    <main className="flex flex-col p-24">
      <ol>
        <li><Link href="./propsToComponent/challenge1/">Passing Props to a Component - challenge1</Link></li>
        <li><Link href="./propsToComponent/challenge2/">Passing Props to a Component - challenge2</Link></li>
        <li><Link href="./propsToComponent/challenge3/">Passing Props to a Component - challenge3</Link></li>
      </ol>
      <hr className='my-5'/>
      <ol>
        <li><Link href='./conditionalRendering/challenge1/'>Conditional Rendering - challenge1</Link></li>
        <li><Link href='./conditionalRendering/challenge2/'>Conditional Rendering - challenge2</Link></li>
        <li><Link href='./conditionalRendering/challenge3/'>Conditional Rendering - challenge3</Link></li>
      </ol>
      <hr className='my-5'/>
      <ol>
        <li><Link href='./renderingLists/challenge1'>Rendering Lists - challenge1</Link></li>
        <li><Link href='./renderingLists/challenge2'>Rendering Lists - challenge2</Link></li>
        <li><Link href='./renderingLists/challenge3'>Rendering Lists - challenge3</Link></li>
        <li><Link href='./renderingLists/challenge4'>Rendering Lists - challenge4</Link></li>
      </ol>
    </main>
  )
}
