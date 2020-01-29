import React, {useState} from 'react';

const Counter_useState = () => {
    // useState 사용, 기본값 = 0
    const [value, setValue] = useState(0);

    return (
        <div>
            현재 카운터 값은 <b>{value}</b> 입니다. &nbsp;&nbsp;
            <button onClick={() => setValue(value + 1)}>+</button>
            <button onClick={() => setValue(value - 1)}>-</button>
        </div>
    );
};

export default Counter_useState;