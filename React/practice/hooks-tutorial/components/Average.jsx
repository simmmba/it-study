import React, {useState, useMemo, useCallback, useRef} from 'react';

const getAverage = numbers => {
    console.log('평균값 계산중~');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return  sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    // useRef
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성

    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]); // number나 list가 바뀌었을 때에만 함수 생성

    // useMemo
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert} >등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균 값: </b>{avg}
            </div>
        </>
    );
};

export default Average;