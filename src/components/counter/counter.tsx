import React, {useState} from 'react';

const Counter = () => {
    const [currentn, setcurrentn]=useState('1');
    const [prev,setstate] = useState(0);
    const OnChange  = (value:number) =>{
        setstate(prev+value)
        console.log(prev);
    }
    return (
        <div>
            <div>
                <div>
                    <input type="text"
                           value={currentn}
                           onChange={(e)=>setcurrentn(e.target.value)}
                    />
                </div>
                {prev}
            </div>
            <div>
                <button onClick={()=>OnChange(1)}>Plus 1</button>
                <button onClick={()=>OnChange(-1)}>Minus 1</button>
                <button onClick={()=> OnChange(55)}>Plus 55</button>
                <button onClick={()=>OnChange(1000)}>Plus 1000</button>
                <button onClick={()=>OnChange(parseInt(currentn))}>Plus n</button>
            </div>
        </div>
    );
};

export default Counter;