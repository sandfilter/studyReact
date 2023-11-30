/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

function  Card ({ children,title }:any){
  return (
    <div className="card">
      <div className="card-content">
        <h1>{ title }</h1>
       { children }
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div className='p-10'>
    <p className='mb-10'><Link href="/">返回</Link></p>
      <Card title="Photo">
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card> 
      <Card title="About">
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>
    </div>
  );
}
