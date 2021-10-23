
import React,{useState,useEffect} from 'react'
import { Container,Button } from 'react-bootstrap'
export default function Hook1() {
  const[hook,setHook] = useState(0)
  const[text,setText]=useState("text change")
  useEffect(() => {
   
      document.title=`clicked times ${hook}`
    });
    
  return (
    <div>
      <Container>
       <h1>click count time{hook}</h1>
        
          <Button onClick={()=>setHook(hook+1)}>click</Button>
      <h1>gg{text}</h1>
      <Button onClick={()=>setText("hello Rayhan")}>text</Button>
 
 </Container>
    </div>
  )
}

