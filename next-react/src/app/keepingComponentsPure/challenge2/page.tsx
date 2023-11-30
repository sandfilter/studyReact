import Profile from './Profile';
import Link from 'next/link';

export default function App() {
  return (
    <div className='p-10'>
    <p className='mb-10'><Link href="/">返回</Link></p>
      <Profile person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <Profile person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
    </div>
  )
}
