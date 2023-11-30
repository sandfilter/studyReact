/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Fragment } from 'react';

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  return (
    <article className='p-10 text-center'>
    <p className='mb-10'><Link href="/">返回</Link></p>
      {poem.lines.map((line, index) =>
        // eslint-disable-next-line react/jsx-key
        <Fragment key={index}>
        {index >0 && <hr className='my-5'/>}
        <p className='text-xl'>{line}</p>
        </Fragment>
      )}
    </article>
  );
}
