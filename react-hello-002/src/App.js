import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Write from "./components/write";
import View from "./components/view";
import View1 from "./components/view1";
import View2 from "./components/view2";

function App() {
  /**
   * friend 객체를 App.js 에서 선언하고
   * wirte.js 와 view.js 에 전파하였다
   * App.js 에서 생성된, 선언된 값은 write,js 와 view,js 에서 볼 수 있다
   * (화면에 그려진다)
   *
   * write.js는 보는 것 뿐만 아니라 키보드를 사용하여
   * 값을 입력, 변경 할 수 있어야 한다.
   * 하지만 App.js(부모)로부터 전달받은 friend 변수는
   * 절대 wirte.js 에서 변경 할 수 없다.
   *
   * App.js에서 friend 변수를 변경하는 함수를 선언하고
   * 변수와 함수를 함께 write.js 에게 전달한다
   */
  const [friend, setFriend] = useState({
    f_name: "성춘향",
    f_addr: "남원시",
  });

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setFriend({ ...friend, [name]: value });
  };

  return (
    <div className="App">
      <header className="App-header">
        <View2 fo={friend} />
        <img src={logo} className="App-logo" alt="logo" />
        <Write fd={friend} onChangeHandle={onChangeHandle} />
        <View fo={friend} />
      </header>
      <View1 fo={friend} />
    </div>
  );
}

export default App;
