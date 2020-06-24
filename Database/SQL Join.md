# SQL Join

``` sql
A) id   name        B) id  name
   --   ----           --  ----
   1    티몬  (중복)     1   티몬  (중복)
   2    품바            2   쿠팡
   3    날라            3   심바   (중복)
   4    심바  (중복)     4   위메프
```

<BR />

### 1. Inner Join

- 두 테이블의 **교집합**
- 공통된 값 출력

```sql
SELECT *
FROM A INNER JOIN B
ON A.name = B.name;

-- 결과 --
id   name  id  name
--   ----  --  ----
1    티몬   1   티몬 
4    심바   3   심바   
```

<BR />

### 2. Full Outer Join

- 두 테이블의 **합집합**

- 공통된 값들은 공통된 값끼리 묶여 출력

- 공통되지 않은 값들도 모두 출력

- MySQL에서는 지원하지 않음

  - Left join과 Right join을 UNION해 사용 가능

  ```mysql
  SELECT *
  FROM A LEFT JOIN B
  ON A.name = B.name
  UNION
  SELECT *
  FROM A RIGHT JOIN B
  ON A.name = B.name;
  ```

```sql
SELECT *
FROM A FULL OUTER JOIN B
ON A.name = B.name;

-- 결과 --
id    name   id    name
--    ----   --    ----
1     티몬    1     티몬 
2     품바    null  null
3     날라    null  null  
4     심바    3     심바
null  nul    2     쿠팡 
null  null   4     위메프
```

<BR />

### 3. Left Outer Join (Left Join)

- 두 테이블 중 오른쪽 테이블에 조인 시킬 컬럼 값이 없는 경우 사용
- **왼쪽 테이블 값 모두 출력**
- 오른쪽 테이블 값은 매칭되는게 없으면 출력되지 않음 **(null로 출력)**

```mysql
SELECT *
FROM A LEFT OUTER JOIN B
ON A.name = B.name;

-- 결과 --
id    name   id    name
--    ----   --    ----
1     티몬    1     티몬 
2     품바    null  null
3     날라    null  null  
4     심바    3     심바
```

<BR />

### 4. Right Outer Join (Right Join)

- 두 테이블 중 왼쪽 테이블에 조인 시킬 컬럼 값이 없는 경우 사용
- **오른쪽 테이블 값 모두 출력**
- 왼쪽 테이블 값은 매칭되는게 없으면 출력되지 않음 **(null로 출력)**

```mysql
SELECT *
FROM A RIGHT OUTER JOIN B
ON A.name = B.name;

-- 결과 --
id    name   id    name
--    ----   --    ----
1     티몬    1     티몬 
null  null   2     쿠팡
4     심바    3     심바
null  null   4     위메프
```

<BR />

```sql
SELECT *
FROM A LEFT OUTER JOIN B
ON A.name = B.name
WHERE B.name IS NULL;

-- 결과 --
id    name   id    name
--    ----   --    ----
2     품바    null  null
3     날라    null  null
```

<BR />

```sql
SELECT *
FROM A RIGHT OUTER JOIN B
ON A.name = B.name
WHERE A.name IS NULL;

-- 결과 --
id    name   id    name
--    ----   --    ----
null  null   2     쿠팡
null  null   4     위메프
```

<BR />

### 5. Cross Join

- 모든 경우의 수
- A 테이블 row 개수 * B 테이블 row 개수만큼 row를 갖는 결과 출력
- Cartesian Product(**곱집합**)

```sql
SELECT *
FROM A CROSS JOIN B;

-- 결과 --
id    name   id    name
--    ----   --    ----
1     티몬    1     티몬 
2     품바    1     티몬 
3     날라    1     티몬 
4     심바    1     티몬 
1     티몬    2     쿠팡
2     품바    2     쿠팡
3     날라    2     쿠팡
4     심바    2     쿠팡
1     티몬    3     심바
2     품바    3     심바
3     날라    3     심바
4     심바    3     심바
1     티몬    4     위메프
2     품바    4     위메프
3     날라    4     위메프
4     심바    4     위메프
```

<BR />

### 6. Natural Join (= Equi Join)

- 두 테이블의 동일한 이름을 가지는 칼럼은 모두 조인
- 동일한 이름을 갖는 칼럼이 모두 조인됨

```sql
SELECT *
FROM A NATURAL JOIN B;

-- 일반 SQL 문장(윗 SQL과 같은 의미)
SELECT *
FROM A, B
WHERE A.id = B.id and A.name = B.name;

-- 결과 --
id    name   id    name
--    ----   --    ----
1     티몬    1     티몬 
```

<BR />

### 7. Self Join

- 자기 자신 참조
- 예) 직속상관 출력하는 경우

```sql
SELECT *
FROM A A1 JOIN A A2 
ON A1.id = A2.id;

-- 결과 --
id    name   id    name
--    ----   --    ----
1     티몬    1     티몬 
2     품바    2     품바
3     날라    3     날라 
4     심바    4     심바
```

<BR />

### 8. Join ~ Using

- Using 문 사용하면 컬럼 선택 조인 가능

```sql
SELECT * FROM A JOIN B USING(name);

-- 결과 --
name   id   id
----   --   --
티몬    1    1
심바    4    3 
```

<BR />

### 9. On 구문

- 조인 조건 지정 가능
- 모든 논리 연산, 서브 쿼리 지정 가능

```sql
-- ON절 사용 예제 (multi-table joins)
SQL> SELECT e.empno, e.ename, e.sal
     FROM emp e JOIN dept d  ON (e.deptno = d.deptno)
                JOIN bonus b ON (b.ename = e.ename)
     WHERE e.sal IS NOT NULL
```



