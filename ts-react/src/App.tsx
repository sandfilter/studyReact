import React, {useState, useTransition, Suspense} from 'react';
// import logo from './logo.svg';
// import Hello from './components/Hello';
// import LikeButton from './components/LikeButton';
// import MouseTracker from './components/MouseTracker';
// import useMouseTracker from './hooks/useMousePosition';
// import useURLLoader from './hooks/useURLLoader';
import DogShow from './components/DogShow';
import Todo from './components/Todo';
import './App.css';

// interface IShowResult {
//   message: string,
//   status: string
// }
interface IThemProps {
  [key: string]:{color: string; background:string}
}

const themes: IThemProps = {
  light:{
    color: '#000',
    background: '#eee'
  },
  dark: {
    color: '#fff',
    background: '#222'
  }
}
export const ThemeContext = React.createContext(themes.light)

function App() {
  const [show, setShow] = useState(true)
  // const positions = useMouseTracker()
  // const [ data, loading ] = useURLLoader('https://dog.ceo/api/breeds/image/random',[show])
  // const dogResult = data as IShowResult
  const [ counter, setCounter]  = useState(0)
  const [input, setInput ] = useState('')
  const [searcDate, setSearcDate] = useState<number[]>([])
  const [isPending, startTransition] = useTransition()
  console.log('update one time', show, counter)
  const updateInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value
    setInput(value)
    startTransition(() => {
      const arr= Array.from({length:100},( _, i) => new Date().getTime() + i )
      setSearcDate(arr)
    })
  }
  const batchUpdate = () =>{
    setShow(!show)
    setCounter( counter + 1)
  }
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
      <header className="App-header">
        {/* <p>
          <button onClick={() => {setShow(!show)}}> refresh dog</button>
        </p> */}
        <Suspense fallback={<h1>loading Dog image....</h1>}>
          <DogShow />
        </Suspense>
        <Suspense fallback={<h1>loading Todo image....</h1>}>
          <Todo />
        </Suspense>
        <p>
          <button onClick={batchUpdate}>batch up date</button>
        </p> 
        <input type='text' value={input} onChange={updateInput} />
        { isPending && <h1>⏳</h1>}
        {searcDate.map(d => 
          <option key={d}>{d}</option>
        )}
        {/* <Hello maessage= "Vince" /> */}
        {/* {show && <MouseTracker /> } */}
        {/* <p>X: {positions.x}, Y: { positions.y}</p> */}
        {/* {loading?<p> 🐶 读取中</p>:<img src={dogResult && dogResult.message} />} */}
        {/* <LikeButton /> */}
      </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
