/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  let output:any = [];

  poem.lines.forEach((line, i) => {
    output.push(
      <hr key={i + '-separator'} className='my-5' />
    );
    output.push(
      <p key={i + '-text'} className='text-xl'>
        {line}
      </p>
    );
  });

  output.shift();

  return (
    <article className='p-10 text-center'>
      <p className='mb-10'><Link href="/">返回</Link></p>
      {output}
    </article>
  );
}
