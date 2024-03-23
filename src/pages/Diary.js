import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  return (
    <div>
      <h1>
        diary
        <p> {params.id}번 일기입니다~ </p>
      </h1>
    </div>
  );
};
export default Diary;
