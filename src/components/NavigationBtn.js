import { useNavigate } from "react-router-dom";

const NavigationBtn = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/new");
  };

  return <button onClick={onClickButton}> new 페이지로 이동 버튼용</button>;
};
export default NavigationBtn;
