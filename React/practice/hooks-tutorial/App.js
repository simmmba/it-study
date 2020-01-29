import React, {useState} from 'react';
import Counter_useState from './components/Counter_useState';
import Counter_useReducer from './components/Counter_useReducer';
import Info_useState from './components/Info_useState';
import Info_useReducer from './components/Info_useReducer';
import Info_useInputs from './components/Info_useInputs';
import ContextSample from './components/ContextSample';
import Average from './components/Average';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Counter_useState />
      <br />
      <Counter_useReducer />
      <br />
      <br />
      <button onClick={() => {
        setVisible(!visible);
      }}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {/* if문(앞이 참일 때 뒷내용 실행) */}
      {visible && <Info_useState />}
      <br />
      <Info_useReducer />
      <br />
      <Info_useInputs />
      <br />
      <ContextSample />
      <br />
      <Average />
    </>
  );
};

export default App;