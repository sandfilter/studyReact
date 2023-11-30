/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { people } from '../data.js';
import { getImageUrl } from '../../propsToComponent/utils.js';

interface listTS {
  title:string,
  people:any
}

function ListSection({title, people}:listTS){
  return (
    <>
      <h2 className='text-xl my-5 font-bold'>{title}</h2>
      <ul>
        {people.map(person =>
          <li key={person.id}>
            <img
              className='mb-2 rounded-full'
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
    </>
  );
}

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
      <h1 className='text-2xl mb-5 font-bold'>Scientists</h1>
      <ListSection
        title="Chemists"
        people={chemists}
      />
      <ListSection
        title="Everyone Else"
        people={elseone}
      />
    </article>
  );
}
