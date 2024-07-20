import React, { useState } from 'react';
import './Inputai.scss';
import { LuSendHorizonal } from "react-icons/lu";
import data from '../../Json';
import { BeatLoader } from 'react-spinners';

const Inputai = () => {
    const [ans, setAns] = useState('');
    const [write, setWrite] = useState('Start your Conversation with Vemox');
    const [loading, setLoading] = useState(false);


    const loader = () => {
        setWrite(ans);
        setLoading(true);
        setAns('');

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        loader();
    }

    return (
        <div className='main'>
            <h1 className='heading'>VEMOX AI</h1>
            <p className='ques'>{write}</p>

            {loading ? (
                <BeatLoader className='loader' color='white' size={10} />
            ) : (



                data
                    .filter((a) => {
                        const newjson = a.question.toLowerCase();
                        const newsearch = write.toLowerCase();
                        const newp = newsearch.includes(newjson);
                        return newp
                    })
                    .map((ai) => (
                        <p  className='ans'>{ai.answer}</p>
                    ))
            
                   
            )}

            
            <form className="inp_btn" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Ask anything to Vemox!'
                    value={ans}
                    onChange={(e) => setAns(e.target.value)}
                />
                <span type="submit" onClick={loader}>
                    <LuSendHorizonal />
                </span>
            </form>
        </div>
    );
};

export default Inputai;
