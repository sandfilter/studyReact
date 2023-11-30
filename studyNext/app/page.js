import LikeButton from './like-button';

function Header(props) {
  return (
    <>
    <h1>{props.title ? props.title : 'Default title' }</h1>
    <h2>大家好，这里是ReactJS - JSX创建的DOM</h2>
    </>
  );
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return <div>
    <Header title="React ❤️"/>
    <Header title="React 🚀 Next.JS"/>
    <ul>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
    <LikeButton />
  </div>;
}
