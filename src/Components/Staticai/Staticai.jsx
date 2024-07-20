import { useState } from 'react';
import './Staticai.scss';
import data from '../../Json';


function Staticai() {
  const [hide,setHide] = useState(false)
  const[a,setA] = useState()



  const handleclick = (id) =>{
    setHide(!hide)
    setA(id)
  }
  return (
    
    
      <div className='main'>
      {
      data.map((ai)=>{
        return(
          <div>
          
          <p className='question' onClick={()=> handleclick(ai.id)}>{ai.question}</p>
          {hide && ai.id===a &&<p className='answer'>{ai.answer}</p>}
          </div>
        )
      })
     }
      </div>
   
  );
}

export default Staticai;
