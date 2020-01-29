import React, {useReducer} from 'react'

function reducer(state, action){
    switch (action.type){
        case 'INCREMENT' : 
            return {value: state.value + 1};
        case 'DECREMENT' : 
            return {value: state.value - 1};
        default:
            return state;
    }
}

const Counter_useReducer = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});

    return (
        <>
            현재 카운터 값은 <b>{state.value}</b> 입니다. &nbsp;&nbsp;
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
        </>
    );
};

export default Counter_useReducer;