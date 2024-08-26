import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

const Heading = (props) =>{

  return <h1 style={{color : props.color}}>{props.text}</h1>
}

const Description =(props) => {
  const [userName, setUserName] = useState('');

  useEffect (() => {
    const name = prompt ("Please enter your name", "Andrew");
    setUserName(name);
  }, []);

  return <h2 style={{fontStyle: props.textStyle}}>{userName} first React application</h2>
}

createRoot(document.getElementById('root')).render(<>

  <Heading text="Hello, world!" color="crimson"/>
  <Description textStyle="italic" />
</>)

