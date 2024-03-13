import { Link } from "react-router-dom";

const RouterTest = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/diary"}>diary</Link>
      <br />
      <Link to={"/new"}>new</Link>
      <br />
      <Link to={"/edit"}>edit</Link>
    </>
  );
};

export default RouterTest;
