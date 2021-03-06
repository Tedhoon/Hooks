import React, { useState, useEffect, useRef } from "react";

const useClick = onClick => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      // 이런식으로도 element가 채워졌을 때 감지도 가능!
      return element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        console.log("componentWillUnMount시 실행 ^0^");
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};


function App() {
  const sayHello = () => {
    console.log("say Hello!!");
  };
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>my title</h1>
    </div>
  );
}

export default App;
