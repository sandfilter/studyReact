import React, { Component } from 'react'
import logo from './logo.svg';
import ThemeContext from './theme-context';
import ThemedBar from './components/ThemedBar';
import './App.css';


const thems = {
  light:{
    classname: 'btn btn-primary',
    bgColor: '#eee',
    color: '#000'
  },
  dark:{
    classname:'btn btn-light',
    bgColor: '#222',
    color: '#fff'
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      theme: 'light'
    }
    this.changTheme = this.changTheme.bind(this)
  }
  changTheme(theme) {
    this.setState({
      theme,
    })
  }
  render() {
    return (
      <ThemeContext.Provider value={thems[this.state.theme]}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a href='#them-switcher' className='btn btn-light' onClick={()=> { this.changTheme('light')}}> 浅色</a>
            <a href='#them-switcher' className='btn btn-secondary' onClick={()=> { this.changTheme('dark')}}> 浅色</a>
          </header>
          <ThemedBar />
        </div>
      </ThemeContext.Provider>
    );
  }

}

export default App;
