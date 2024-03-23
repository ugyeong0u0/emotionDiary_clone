import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NavigationBtn from "./components/NavigationBtn";
import RouterTest from "./components/RouterTest";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h2>App.js</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
        <RouterTest />
        <NavigationBtn />
        <div />
      </BrowserRouter>
    </div>
  );
}

export default App;
