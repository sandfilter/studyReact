/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { people } from '../data.js';
import { getImageUrl } from '../../propsToComponent/utils.js';

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const elseone = people.filter(person =>
    person.profession !== 'chemist'
  );
  return (
    <article className='p-10'>
      <p className='mb-10'><Link href="/">返回</Link></p>
      <h1 className='text-2xl mb-10 font-bold'>Scientists</h1>
      <h2 className='text-xl mb-5 font-bold'>Chemists</h2>
      <ul>
        {chemists.map(person =>
        <li key={person.id}>
          <img
            src={getImageUrl(person.imageId)}
            alt={person.name}
          />
          <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
          </p>
        </li>
        )}
      </ul>
      <h2 className='text-xl mb-5 font-bold'>Everyone Else</h2>
      <ul>
        {elseone.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person.imageId)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
    </article>
  );
}
