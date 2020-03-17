# Collection

- 동일 속성 데이터를 그룹으로 저장할 수 있는 메모리 구조

  ex) Stack, Queue, Array, List, Hash, Dictionary, ...

- 변수에 따라 반복문 반복되는 문제 개선 가능

- Memory Direct Access 방식이기 때문에 더 빠름

<br />

### 언제 필요?

- 동일한 속성 데이터들이 반복적으로 비교 연산되는 경우
- 비교 연산 후 결정되는 동작이 비슷한 패턴으로 반복되는 경우

<br />

### 단점

- 초기에 Collection을 만들기 위한 CPU/메모리 비용 발생
- 가독성, 메모리/CPU 사용량 등 종합적으로 고려해 적절하게 적용해야함
- Collection을 초기에 한 번 만들고(Memory에 Write), 사용(Memory에서 Read)을 여러 번 할 경우 성능이 개선됨

<br />

- 메모리 많이 사용 == 보통 Heap 메모리 얘기

<br />

#### 반복문 vs Collection

- 반복문 사용
  - 메모리 사용량 적음
  - CPU 속도 느림

- Collection 사용
  - 메모리 사용량 많음(Array 객체 생성해야함)
  - CPU 속도 빠름(return 빠름) == CPU 적게 사용

