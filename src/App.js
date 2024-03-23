import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NavigationBtn from "./components/NavigationBtn";
import RouterTest from "./components/RouterTest";

import Button from "./components/Button";

import { getEmotion } from "./util/get_emotion_img";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header
        title={"Header"}
        leftchild={<Button text={"Left"} />}
        rightchild={<Button text={"Right"} />}
      ></Header>
      <Button
        text={"1,2,3"}
        onClick={() => {
          console.log("123 버튼 클릭 ");
        }}
        type={"default"}
      />
      <Button
        text={"1,2,3"}
        onClick={() => {
          console.log("123 버튼 클릭 ");
        }}
        type={"positive"}
      />
      <Button
        text={"1,2,3"}
        onClick={() => {
          console.log("123 버튼 클릭 ");
        }}
        type={"negative"}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
        <RouterTest />
        <div />
      </BrowserRouter>
    </div>
  );
}

export default App;
