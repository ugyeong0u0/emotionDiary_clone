import { getEmotion } from "../util/get_emotion_img";
// getEmotion은 함수
import Button from "./Button";
import "./DiaryItem.css";

const DiaryItem = () => {
  const emotionId = 1;

  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId} `}>
        {/*배경 설정을 위한 배틱이용 + 두개 css 스타일링 적용으로 띄어쓰기로 분간   */}
        <img src={getEmotion(1)} />
      </div>
      <div className="info_section">
        <div className="created_date">{new Date().toLocaleDateString()}</div>{" "}
        {/*2024.3.28 로 랜더링됨 */}
        <div className="content">일기 컨텐츠</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} />
        {/*버튼 태그 사이에 한글 넣으면 이미 Button 컴포넌트에 들어가있기때문에 무식됨*/}
      </div>
    </div>
  );
};
export default DiaryItem;
