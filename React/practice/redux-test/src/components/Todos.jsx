import React from 'react';

const TodoItem = ({todo, onToggle, onRemove}) => {
    return (
        <>
            <input type="checkbox" />
            <span>예제 테스트</span>
            <button>삭제</button>
        </>
    );
};

const Todos = ({
    input, // input text
    todos, // 할일 목록이 들어있는 객체
    onChangeInput,
    onInsert,
    onToggle,
    onRemove
}) => {
    const onSubmit = e => {
        e.preventDefault();
    };

    return(
        <>
            <form onSubmit = {onSubmit} >
                <input />
                <button type = "submit">등록</button>
            </form>
            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </>
    );
};

export default Todos;