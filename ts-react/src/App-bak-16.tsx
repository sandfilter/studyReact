import React, {useState} from 'react';
import logo from './logo.svg';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMouseTracker from './hooks/useMousePosition';
import useURLLoader from './hooks/useURLLoader';
import './App.css';

interface IShowResult {
  message: string,
  status: string
}
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
  const positions = useMouseTracker()
  const [ data, loading ] = useURLLoader('https://dog.ceo/api/breeds/image/random',[show])
  const dogResult = data as IShowResult
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
      <header className="App-header">
        <p>
          <button onClick={() => {setShow(!show)}}> refresh dog</button>
        </p>
        <Hello maessage= "Vince" />
        {/* {show && <MouseTracker /> } */}
        {/* <p>X: {positions.x}, Y: { positions.y}</p> */}
        {loading?<p> 🐶 读取中</p>:<img src={dogResult && dogResult.message} />}
        <LikeButton />
      </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
