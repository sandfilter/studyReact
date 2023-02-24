import React from "react"
interface IHelloProps {
  maessage?: string
  children?: React.ReactNode;
}

const Hello: React.FC<IHelloProps> = (props) => {
  // props.children
  return <h2> { props.maessage }</h2>
}

Hello.defaultProps = {
  maessage: 'Hello Vince'
}

export default Hello;