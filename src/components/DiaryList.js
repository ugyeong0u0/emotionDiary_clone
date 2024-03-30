import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";

const DiaryList = () => {
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button text={"새로운 일기 쓰기"} type={"positive"} />
      </div>
      {/* 필터랑 , 새 일기 작성하기 div */}
      <div className="list_wrapper"></div> {/* 다이어리 리스트 div */}
      <DiaryItem />
    </div>
  );
};

export default DiaryList;
