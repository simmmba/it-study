# MobX

## 설치

```bash
$ yarn add mobx mobx-react
```

#### babel 설정에 필요한 plugin 설치

```bash
$ yarn add @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators
```

```bash
$ yarn eject
```

- 아래와 같이 수정

```json
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ]
    ]
  }
```

#### mobx-react-devtools 개발도구 설치

- 어떤 값을 바꿨을 때 어떠한 컴포넌트들이 영향을 받고, 업데이트는 얼마나 걸리고, 어떠한 변화가 일어났는지에 대한 세부적인 정보를 볼 수 있게 해줌

```bash
$ yarn add mobx-react-devtools
```

<br />

## 개념

### decorate

- 해당 컴포넌트 요소에 MobX 개념을 각각 적용할 수 있도록 해주는 함수
  - 첫번째 파라미터 : 적용할 컴포넌트
  - 두번째 파라미터 : object 방식
    - key: MobX에 적용할 변수명 및 함수명
    - value: 적용할 mobx 개념



### observer

- observable로 선언한 state값(예시의 경우 number 값)이 변할 때, 컴포넌트 API인 forceUpdate()를 자동 호출해 변경된 값이 화면에 반영



### computed

- observable 값 변경에 의한 연산 처리



<br />

## MobX React component 최적화

1. 리스트를 렌더링 할 땐, 컴포넌트에 리스트 관련 데이터만 props 로 넣자
   - 리스트 컴포넌트에 리스트 관련 props 만 넣기
   - 렌더릴 될 대상은 최대한 분리해서 observer 적용시키기
2. 세부 참조(dereference, 역참조)는 최대한 늦게하기
   - 특정 객체 내부 값을 조회하는 것

3. 함수는 미리 바인딩, 파라미터는 내부에서 넣기
   - 컴포넌트에 함수를 전달해 줄 때에는 미리 바인딩
   - 바인딩 시킬 함수는 최대한 밖에서 선언

4. 바인딩 시킬 함수의 파라미터는 최대한 내부에서 적용
   - 파라미터가 유동적일 때는 파라미터를 넣는 작업을 컴포넌트 밖이 아니라 안에서 하는것이 좋음

