import React from 'react';

function App() {
  const year = 2024;
  const year2 = 1;
  const strA = "올해는";
  const strB = "20024년";
  const boolT = "true";
  const boolF = "false";
  const number = [1,2,3]
  const user = {
    name:'제니',
    age:26,
    isLogin: false
  }

  return (
    <div>
      <h1>나의 첫 react 파일</h1>
      <p>상태관리 프로그램</p>
      <ul>
        <li>1. 숫자값 :{year}</li>
        <li>2. 연산식 :{year + year2}</li>
        <li>3. 문자값열 :{strA + strB}</li>
        <li>4. 논리값 :{boolT || boolF}</li>
        <li>5. 배열 :{number.join(',')}</li>
        <li>6. 객체 :{user.name}-{user.age}입니다</li>
        <li>7. 조건부 랜더링 :{year2}은{year%2==0?"짝수":"홀수"}</li>
        <li>{user.isLogin?<button style={{backgroundColor:'red'}}>로그아웃</button>:<button>로그인</button>}</li>
      </ul>
    </div>
  );
}

export default App;

