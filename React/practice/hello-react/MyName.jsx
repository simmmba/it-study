// 클래스 방식
// import React, {Component} from 'react';
// 
// class MyName extends Component{
//     // 1. defaultProps
//     // static defaultProps = {
//     //     name : '기본이름'
//     // }

//     render(){
//         return(
//             <div>
//                 안녕하세요
//                 제 이름은 <b>{this.props.name}</b> 입니다.
//             </div>
//         );
//     }
// }

// // 2. defaultProps
// MyName.defaultProps = {
//     name: '기본이름'
// };

import React from 'react';

const MyName = ({name}) => {
    return(
        <div>
            안녕! 내 이름은 {name}.
        </div>
    );
};

// defaultProps
MyName.defaultProps = {
    name: '기본이름'
};

export default MyName;