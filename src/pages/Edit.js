import { useSearchParams } from "react-router-dom";

const Edit = () => {
  const [params, setParams] = useSearchParams();
  return (
    <div>
      <h1>
        edit
        <p>
          이곳은 수정페이지 입니다.
          {params.get("value")}
        </p>
      </h1>
    </div>
  );
};
export default Edit;
