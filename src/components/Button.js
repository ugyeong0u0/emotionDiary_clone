import "./Button.css";

// 부모에게 받는 props에 따라 다르게 버튼 보이게 하기
// onClick은 버튼이 눌러졌을 때 실행할 이벤트 핸들러
const Button = ({ text, type, onClick }) => {
  return (
    /* 클래스 이름이 Button Button_인이유는 띄어쓰기 기준으로 .Button 과 .Button_ css 스타일링 
    두개 다 적용하기 위함 
    import 관련 css 파일 꼭 해야함 */
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  );
};

export default Button;
