import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RouterTest from "./components/RouterTest";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";

import Button from "./components/Button";

import Header from "./components/Header";
import { useReducer } from "react";
import { useRef } from "react";

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
];
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
  }

  return state;
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };
  return (
    <div className="App">
      <Header
        title={"Header"}
        leftchild={<Button text={"Left"} />}
        rightchild={<Button text={"Right"} />}
      ></Header>

      <button
        onClick={() => {
          onCreate(new Date().getTime, 1, "Hello");
        }}
      >
        일기 추가 테스트
      </button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
        <RouterTest />
        <div />
      </BrowserRouter>
    </div>
  );
}

export default App;
