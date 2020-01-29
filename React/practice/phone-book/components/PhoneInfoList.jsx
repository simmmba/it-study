import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component{
    static defaultProps = {
        data: [],
        list: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined')
    }

    // 변화가 필요하지 않을 때 render 함수 호출 X
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.data !== this.props.data;
    }

    render(){
        console.log('render PhoneInfoList');
        const {data, onRemove, onUpdate} = this.props;
        // data 배열 가져와 map을 통해 jsx로 변환
        const list = data.map(
            // key: 리액트에서 배열을 렌더링 할 때 꼭 필요한 값, 데이터 추가시마다 고정된 고유 값 부여해야함
            info => (
                <PhoneInfo 
                    key = {info.id}
                    info = {info}
                    onRemove = {onRemove}
                    onUpdate = {onUpdate}
                />
            )
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;