import React from 'react'
import data from '../../Json'
import './Answerai.scss'

const Answerai = () => {
    
  return (
    <div className="amain">

        {data.map((item)=>{
            return(
                <p className='ans'>{item.answer}</p>
                
            )
        })
            }
    </div>
  )
}

export default Answerai