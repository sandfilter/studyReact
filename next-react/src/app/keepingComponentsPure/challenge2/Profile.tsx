import Panel from './Panel';
import { getImageUrl } from '@/app/propsToComponent/utils.js';


export default function Profile({ person }:any) {
  return (
    <Panel>
      <Header person={person}/>
      <Avatar person={person} />
    </Panel>
  )
}

function Header({ person }:any) {
  return <h1 className='mb-3'>{person.name}</h1>;
}

function Avatar({ person }:any) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="mb-3 rounded-full"
      src={getImageUrl(person.imageId)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}
