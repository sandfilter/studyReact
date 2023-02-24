import { useState } from 'react';
import NameCard from './components/NameCard';
import LikesBtn from './components/LikesBtn';
import DigitalColok from './components/DigitalClock';
import CommentBox from './components/CommentBox';
import CommentBoxF from './components/CommentBoxF';
import CommentEmail from './components/CommentEmail';
import CommentList from './components/CommentList';

const tags = ['love','Chinese'];

function App(){
  const todoList = ['xiang', 'zhou'];
  const isLogin = true;
  const test = <h2>I am Vincezhou</h2>;
  // console.log(test);
  const [commentList,setCommentList] = useState(['this is my first replay','111']);
  return (
    <div className="div" htmlFor="">
     <h1>Hello Vince!</h1>

     <ul>
      {
        todoList.map(item =>
          <li>{item}</li>
        )
      }
     </ul>

      {isLogin ? <p>已登录</p> : <p>请登录</p>}

      <NameCard name="Vince" number={ 1015 } isHuman tags={tags} />
      <LikesBtn />
      <DigitalColok />
      <CommentBox />
      <CommentEmail />
      <CommentList comments = {commentList}/>
      <CommentBoxF commentsLength = { commentList.length}/>
    </div>
  );
}
export default App;