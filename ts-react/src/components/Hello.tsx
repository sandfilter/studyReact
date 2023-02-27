import React,{useContext} from "react"
import { ThemeContext } from "../App";
interface IHelloProps {
  maessage?: string
  children?: React.ReactNode;
}

const Hello: React.FC<IHelloProps> = (props) => {
  const theme = useContext(ThemeContext)
  console.log(theme)
  const style = {
    background: theme.background,
    color: theme.color
  }
  // props.children
  return <h2 style={style}> { props.maessage }</h2>
}

Hello.defaultProps = {
  maessage: 'Hello Vince'
}

export default Hello;