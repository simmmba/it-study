// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component, Fragment } from 'react';
import './App.css'
import MyName from './MyName';
import Counter from './Counter';

class App extends Component {
  render() {
    const name = 'react';
    const value = 1;
    
    const style = {
      backgroundColor : 'black',
      padding: '16px',
      color : 'white',
      fontSize: '20px'
    };

    return (
      <Fragment>
        {/* props 실습 */}
        <MyName name = "리액트" />
        {/* defaultProps 실습 */}
        <MyName />

        {/* state 실습 */}
        <Counter />

        <div className="App">
          Hello
          <input type = "text"></input>
        </div>
        <div>
          Bye {name}!
        </div>
        <div style = {style}>
          {
            1 + 1 === 2 ? (<div>맞음</div>) : (<div>틀림</div>)
          }
          {
            1 + 1 === 2 && (<div>맞았음</div>)
          }
          {/* IIFE : IF문, switch문 사용 가능 */}
          {
            (function(){
              if(value === 1) return (<div>1</div>);
              else return (<div>흠</div>);
            })()
            // 같은 의미
            // (() => {
            //   if (value === 1) return (<div>하나</div>);
            //   if (value === 2) return (<div>둘</div>);
            //   if (value === 3) return (<div>셋</div>); 
            // })()
          }
        </div>
      </Fragment>
    );
  }
}

export default App;