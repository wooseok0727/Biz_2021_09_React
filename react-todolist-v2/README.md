# todoList에 login 부착하기

- todoList 를 실행하면 로그인이 되었나 확인하고
- login이 되었으면 todoList 화면을 보여주고
- login이 되어있지 않으면 login화면으로 redirect하여  
  로그인을 수행하도록 한다

## 두개의 화면을 조건에 따라 달리 보여주기

- react-router-dom 을 사용하여 화면을 달리 보여주기 실행
- react-router-dom 을 사용하지 않고도 구현할 수 있겠지만,  
  redirect등의 수행을 하기에는 react-router-dom을 사용한 것이 다소 편리하다

- yarn add react-router-dom

## 로그인을 수행한 후 로그인정보(user)을 유지하기 위하여

- User 정보를 관리할 Context를 생성
