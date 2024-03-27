import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  return (
    <div>
      <h1>
        edit
        <p>{params.id}이곳은 수정페이지 입니다.</p>
      </h1>
    </div>
  );
};
export default Edit;
