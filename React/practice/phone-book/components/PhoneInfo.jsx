import React, {Component} from 'react';

class PhoneInfo extends Component{
    static defaultProps = { // info 기본값 설정
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    }

    state = {
        // 수정 버튼을 눌렀을 때 editing 값 true
        // true일 때 기존 텍스트 형태로 보여주던 값들을 input 형태로 보여줌
        editing: false,

        // 유동적인 input 값을 담기 위해 각 필드를 위한 값 설정
        name: '',
        phone: ''
    }

    shouldComponentUpdate(nextProps, nextState){
        // 수정 상태가 아니고, info 값이 같다면 리렌더링 안함
        if(!this.state.editing && !nextState.editing && nextProps.info === this.props.info){
            return false;
        }

        return true; // 나머지 경우엔 리렌더링 함
    }

    handleRemove = () => {
        // 삭제 버튼이 클릭되면 onRemove에 id 넣어 호출
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    // editing 값 반전시키는 함수
    // true -> false, false -> true
    handleToggleEdit = () => {
        const {editing} = this.state;
        this.setState({editing: !editing});
    }

    // input에서 onChange 이벤트 발생할 때 호출
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    // editing 값이 바뀔 때 처리할 로직
    // 수정 누르면 기존 값 input에
    // 수정 적용하면 input 값 부모로 전달
    componentDidUpdate(prevProps, prevState){
        const {info, onUpdate} = this.props;

        // editing 값이 false -> true 전환되면 info 값 state에 넣어줌
        if(!prevState.editing && this.state.editing){
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }
        
        // editing 값이 true -> false 전환
        if(prevState.editing && !this.state.editing){
            onUpdate(
                info.id, 
                { name: this.state.name, 
                  phone: this.state.phone }
            );
        }
    }

    render(){
        console.log('render PhoneInfo ' + this.props.info.id);

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        // 수정
        const {editing} = this.state;

        if(editing){
            return (
                <div style = {style}>
                    <div>
                        <input
                            value = {this.state.name}
                            name = "name"
                            placeholder = "이름"
                            onChange = {this.handleChange} 
                        />
                    </div>
                    <div>
                        <input
                            value = {this.state.phone}
                            name = "phone"
                            placeholder = "전화번호"
                            onChange = {this.handleChange} 
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            );
        }

        const {
            name, phone
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;
