import Header from "../components/Header";
import Button from "../components/Button";
import Diary from "./Diary";
import DiaryList from "../components/DiaryList";

const Home = () => {
  return (
    <div>
      <Header
        title={"2024년 2월 "}
        leftchild={<Button text={"<"} />}
        rightchild={<Button text={">"} />}
      />
      <DiaryList />
    </div>
  );
};
export default Home;
