import React, { useState } from 'react';


const AppUseState = () => {
    const [num, setNum] = useState(0);
    const handleClick = () => {
        setNum(num + 1);
        console.log(num);
    };
    

    return (
        <div className="App">
            <h2> {num}</h2>
            <button onClick={handleClick}>
                Add one
            </button>
        </div>
    );
};

export default AppUseState;